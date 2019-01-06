# User credentials for Hypervault

## Summary

In order to access the Hypervault network, all users need digital identities and corresponding credentials. A `hypervault-id` is a digital ID that is complete and can be used to access the Hypervault network. A `hypervault-id` contains a **Business Network Card** created by the blockchain network, an **RSA key pair** used to securely communicate with different components of the network and **meta-data entries** that are all derived from the identity in the blockchain. 

## Specification 

```json
{
  "meta": {
    "encoding": "base64",  // encoding algorithm used to encode binary files 
    "networkParticipant": "resource:tech.hypervault.User#user1",  // the full identifier of this hypervault-id in the hypervault network
    "userId": "user1",     // must match the userId specified above

    ////////////////////////////////////////////
    // The following is optional
    ////////////////////////////////////////////
    "passwordProtected": true,  // if true, the data entries in properties "binary" and "keys" are encrypted using the cipher specified and the salt given
    "cipher": "aes-256-cbc",
    "salt": "some random salt",   // generated when identity is issued

  },

  "keys": {
    "public": "-----public key----- OR encrypted version",
    "private": "-----private key----- OR encrypted version"
  },
  "binary": {
    "card": "some base64 string for the composer card OR encrypted version"
  }
}
```