// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "./MerkleTreeWithHistory.sol";

abstract contract IVerifier {
  function verifyProof(uint256[2] memory a, uint256[2][2] memory b, uint256[2] memory c, uint256[2] memory input) virtual public returns(bool);
}

contract HidingPot is MerkleTreeWithHistory {
  uint256 public transferValue;
  mapping(uint256 => bool) public nullifierHashes;
  IVerifier public verifier;

  constructor(
    IVerifier _verifier,
    IHasher _hasher,
    uint256 _transferValue,
    uint8 _merkleTreeHeight
  ) MerkleTreeWithHistory(_merkleTreeHeight, _hasher) {
    verifier = _verifier;
    transferValue = _transferValue;
  }

  // commitment is PedersenHash(nullifier + secret)
  function deposit(uint256 commitment) public payable {
    _insert(bytes32(commitment));
  }

  function withdraw(uint256[2] memory a, uint256[2][2] memory b, uint256[2] memory c, uint256[2] memory input) public {
    uint256 root = input[0];
    uint256 nullifierHash = input[1];

    require(!nullifierHashes[nullifierHash], "The note has been already spent");
    require(isKnownRoot(bytes32(root)), "Cannot find your merkle root");
    require(verifier.verifyProof(a, b, c, input), "Invalid withdraw proof");

    nullifierHashes[nullifierHash] = true;
    payable(msg.sender).transfer(transferValue);
  }

  function isSpent(uint256 nullifier) public view returns(bool) {
    return nullifierHashes[nullifier];
  }
}
