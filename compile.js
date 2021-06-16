// compile code will go here
const path = require('path');
const fs = require('fs');
const solc = require('solc');

//define the path for the contract
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

//read the code of our contract
const source = fs.readFileSync(inboxPath, 'utf8');

//export the object complied of our contract
const compile = solc.compile(source, 1).contracts[':Inbox'];

module.exports = compile;