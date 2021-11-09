const Likelib = require('../likelib-js/likelib.js');

let lk = new Likelib("ws://localhost:50051");
const account = new Likelib.Account("2aef91bc6d2df7c41bd605caa267e8d357e18b741c4a785e06650d649d650409");

// Create transaction
let tx = new Likelib.Tx({
    from: '49cfqVfB1gTGw5XZSu6nZDrntLr1',
    to: '49cfqVfB1gTGw5XZSu6nZDrntLr2',
    amount: 500n,
    fee: 100n,
    timestamp: Math.floor(Date.now()/1000)
});
// Get current balance
lk.getAccountInfo('49cfqVfB1gTGw5XZSu6nZDrntLr2', function(err, info) {
    if(err) {
        console.log("Error");
        return;
    }
    console.log("Current balance is " + info.balance);
});

// Calculate and set signature for transaction
account.sign(tx);
// Push transaction to node
lk.pushTransaction(tx, function(err, info) {
    // Wait Success status code (if status code success transaction added to blockchain)
    if(info.status_code == Likelib.Tx.Status.Success) {
        console.log("Transaction has been performed");
        // Get current balance (We have success transaction, balance increased by 500 (becouse tx.amount==500))
        lk.getAccountInfo('49cfqVfB1gTGw5XZSu6nZDrntLr2', function(err, info) {
            if(err) {
                console.log("Error");
                return;
            }
            console.log("Current balance is " + info.balance);
        });
    }
});

//process.exit(0)
