let TokenBatchTransfer = artifacts.require("./TokenBatchTransfer.sol");
let Contract = require("@truffle/contract");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(TokenBatchTransfer, "0x6925435f9D1CB710abeb680Ec7EF3f8C5E1B2639");
};
