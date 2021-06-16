const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compile = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    // Uses one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(compile.interface))
        .deploy({
            data: compile.bytecode, 
            arguments: ['Hi there!'] 
        })
        .send({ 
            from: accounts[0], 
            gas: '1000000', 
        });
});

describe ('Inbox', () => {
    it('deploys a contract', () => {
        console.log(inbox);
    });
});
