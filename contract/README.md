# Smart Contracts

## Install dependencies
```
    npm install
```

## Compile
```
    npx hardhat compile
```

## Deploy to Clover
1. run container with Clover node
2. docker exec -it clover-node bash
3. mkdir git
4. cd git
5. git clone https://github.com/blockfield/hiding-pot
6. cd ..
7.  ./client
8. connect 127.0.0.1:50051
9. add_wallet base git/proof-of-trade-clover/base_key
10. compile git/hiding-pot/contract/contracts/HidingPot.sol
11. compile git/hiding-pot/contract/contracts/verifier.sol
12. encode Verifier "constructor()"
return: xxx…xxx
13. push_contract base 1000000 0.0 Verifier xxx…xxx
return: Verifier_address
14. push_contract base 1000000 0.0 Hasher_test hasher_bytecode, where hasher_bytecode in contract/contracts/Hasher.json bytecode without 0x
return: Hasher_address
15. encode HidingPot "constructor(Address(Verifier_address), Adrress(Hasher_address), 10, 5)”
return: xxx…xxx (hex -  copy/paste)
16. push_contract base 100000000 0.0 HidingPot xxx…xxx
Received data: {"action_type":3,"fee_left":"998866","message”:”address will be here”,”status_code":0}