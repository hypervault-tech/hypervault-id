# Utility functions for managing business network cards used in Hyperledger Composer

Currently two different modules are available: 

- The `hypervault-id.js` as a command line utility
- The `readCard.js` as a NodeJS module. 

## Usage - CLI 

The CLI must be invoked using `node hypervault-id.js <command> [options]`. To display the help text, simply run 

```
node hypervault-id.js -h
```

## Usage - readCard module

Simply import it into your nodejs scripts. 

### Example: 

```javascript

const readCard = require("./readCard");

async function main() {
  const card = await readCard("./cards/user1.card");
  console.log(card);
}

main();

```

### Cards

The `cards` folder contains sample network credentials to the HyperVault network. The card named `resourceServer.card` is the most up-to-date card to be used for HyperVault resource servers. 