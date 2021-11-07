# Hiding Pot circuits

## Setup (optional)
Node v10 and higher is required. Install packages:
``` 
    npm install
```

Compile circuits:
```
    npm run compile
```

Create setup:
``` 
    npm run setup
```

Generate verifier Solidity contract:
```
    npx snarkjs generateverifier --vk build/withdraw_verification_key.json
```


## Tests
```
    npm run test
```