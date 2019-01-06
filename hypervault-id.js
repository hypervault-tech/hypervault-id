const program = require('commander');
const package = require("./package.json");
const { IdCard } = require('composer-common');
const fs = require("fs");
const path = require("path");
const util = require("util");

writeFile = util.promisify(fs.writeFile);

program.version(package.version, "-v, --version");

program.command("extract <card>")
  .description("Extracts the meta-data and credentials of the specified card. The certificate will be created as `username`.cert, the private key as `username`.key, the meta-data as `username`.meta-json")
  .action(async (card, cmd) => {
    const cardFile = fs.readFileSync(card);
    const rCard = await IdCard.fromArchive(cardFile);
    const username = rCard.metadata.userName;

    await writeFile(path.join(__dirname, `${username}.key`), rCard.credentials.privateKey);
    await writeFile(path.join(__dirname, `${username}.cert`), rCard.credentials.certificate);
    await writeFile(path.join(__dirname, `${username}.meta-json`), JSON.stringify(rCard.metadata) );

    console.log(`Extracted credentials and meta data for ${username}`);
    console.log(`To get the public key, run the openssl command: \n$ openssl x509 -in ${username}.cert -pubkey -noout > ${username}.pub`)
  });
  
program.parse(process.argv);