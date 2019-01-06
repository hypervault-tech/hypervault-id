const { IdCard } = require('composer-common');
const fs = require("fs");

/**
 * Reads and returns the contents of a network card given by `cardPath`. 
 */
module.exports = async function(cardPath) {
  const cardFile = fs.readFileSync(cardPath);
  const card = await IdCard.fromArchive(cardFile);
  return card;
}

