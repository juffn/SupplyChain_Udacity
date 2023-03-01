require("dotenv").config();
const HDWalletProvider = require("truffle-hdwallet-provider");
const private_key = process.env["PRIVATE_KEY_0"];
const infuraKey = process.env["INFURA_KEY"];


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    
    goerli: {
      provider: () =>
        new HDWalletProvider(
          private_key,
          `https://goerli.infura.io/v3/${infuraKey}`
        ),
      network_id: 5,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },

  mocha: {
    timeout: 1000000,
  },

  compilers: {
    solc: {
      version: "0.8.0",
    },
  }
};