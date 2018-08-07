/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

var PrivateKeyProvider = require("truffle-privatekey-provider");
var privateKey = "";

module.exports = {
  networks: {
    ropsten: {
      provider: function () {
        return new PrivateKeyProvider(privateKey, "https://ropsten.infura.io/");
      },
      network_id: 3,
      gas: 5000000
    }
  }
};
