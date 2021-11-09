const Likelib = require('../likelib-js/likelib.js');
function sleep() {
  delay = 2000
  delay += new Date().getTime();
  while (new Date() < delay){}
}

let lk = new Likelib("ws://140.82.57.122:50052");
const account = new Likelib.Account("2aef91bc6d2df7c41bd605caa267e8d357e18b741c4a785e06650d649d650409");

const abi = [
{"inputs":[],
"stateMutability":"nonpayable",
"type":"constructor"},
{"inputs":[],
"name":"getBalanceTest",
"outputs":[{"internalType":"uint256",
"name":"balance",
"type":"uint256"}],
"stateMutability":"view",
"type":"function"},
{"inputs":[],
"name":"test",
"outputs":[{"internalType":"uint256",
"name":"balance",
"type":"uint256"}],
"stateMutability":"view",
"type":"function"}
];
const compiled = '608060405234801561001057600080fd5b5060f98061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063a4356717146037578063f8a8fd6d146051575b600080fd5b603d606b565b6040516048919060a0565b60405180910390f35b6057608a565b6040516062919060a0565b60405180910390f35b60003373ffffffffffffffffffffffffffffffffffffffff1631905090565b60006001905090565b609a8160b9565b82525050565b600060208201905060b360008301846093565b92915050565b600081905091905056fea264697066735822122038d6ab2f3f0358005e650c1ec127cf71f3329c343ad9e877c4b43a2869d3571064736f6c63430008040033'
let contract = Likelib.Contract.nondeployed(lk, account, abi, compiled);

contract.deploy(0, 1000000, function(err, fee_left) {
    if(err) {
        console.log("Error during deplyment: " + err);
    }
    else {
        console.log("Contract was successfully deployed fee_left: " + fee_left);
        console.log("Contract address: " + contract._address + " Set it address in contract call");
        console.log("Contract methods: " + Object.getOwnPropertyNames(contract));
    }
});

