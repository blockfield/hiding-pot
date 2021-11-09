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

const contract_address = 'CY5Hkj2StHTaZoDYEsBZKRCR4EU'

let contract = Likelib.Contract.deployed(lk, account, abi, contract_address);
console.log("Try setup methods, contract address: " + contract._address)
contract._setupMethods(abi);
console.log("Property of contract: " + Object.getOwnPropertyNames(contract))

// TODO
contract.test(0, 50000, function(err, result, hash) {
    if(err){
        console.log("Error: " + err);
    }else{
        console.log("The result is: " + result.balance);
        console.log("Hash: " + hash);

    }

});
