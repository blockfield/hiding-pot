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

Generate bin proving key:
```
    node node_modules/websnark/tools/buildpkey.js -i build/withdraw_proving_key.json -o build/withdraw_proving_key.bin
```


## Tests
```
    npm run test
```