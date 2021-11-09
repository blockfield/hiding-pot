pragma solidity >=0.4.0 <0.7.0;
  
contract BalanceTest2 {

    constructor() public{
    }

    function getBalanceTest() public view returns (uint256 balance){
        return msg.sender.balance;
    }
}
