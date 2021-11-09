const Likelib = require('../likelib-js/likelib.js');
function sleep() {
  delay = 2000
  delay += new Date().getTime();
  while (new Date() < delay){}
}

let lk = new Likelib("ws://localhost:50051");
const account = new Likelib.Account("2aef91bc6d2df7c41bd605caa267e8d357e18b741c4a785e06650d649d650409");

const abi = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "x",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "get",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "stored_data",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "x",
                "type": "uint256"
            }
        ],
        "name": "set",
        "outputs": "",
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const contract_address = 'KLyfjrcGTKYEQLrCSKt1REyGJ8B'

let contract = Likelib.Contract.deployed(lk, account, abi, contract_address);
console.log("Try setup methods, contract address: " + contract._address)
contract._setupMethods(abi);
console.log("Property of contract: " + Object.getOwnPropertyNames(contract))
contract.get(0, 50000, function(err, result, hash) {
    if(err){
        console.log("Error while get: " + err);
    }else{
        console.log("The get() result is: " + result.stored_data);
        console.log("Hash: " + hash);
        sleep()
        data='12532'
        contract.set(data, 0, 50000, function(err, hash) {
           if(err) {
              console.log("Error while setting: " + err);
           }
           else {
              console.log("Set is successfull to: " + data);
              console.log("Hash: " + hash);
              sleep()
              contract.get(0, 50000, function(err, result, hash) {
                 console.log("The get() result is: " + result.stored_data);
                 console.log("Hash: " + hash);
              });
           }
       });

    }

});
