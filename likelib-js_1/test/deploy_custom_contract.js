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
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [],
                "name": "getBalanceTest",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "balance",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
];
const compiled = '6080604052348015600f57600080fd5b50609e8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063a435671714602d575b600080fd5b60336049565b6040518082815260200191505060405180910390f35b60003373ffffffffffffffffffffffffffffffffffffffff163190509056fea2646970667358221220e895b97a717336fe5d35c5db1bb73c184d6acea09e5b98ef87061ecc1642712864736f6c634300060a0033';

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

