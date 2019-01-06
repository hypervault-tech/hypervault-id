# User credentials for Hypervault

## Specification 

```json
{
  "meta": {
    "encoding": "base64",  // encoding algorithm used to encode binary files 
    "networkParticipant": "resource:tech.hypervault.User#user1",  // the full identifier of this hypervault-id in the hypervault network
    "userId": "user1"     // must match the userId specified above

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