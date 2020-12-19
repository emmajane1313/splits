require('@nomiclabs/hardhat-waffle')
const { alchemyAPIKey, deployerPrivateKey } = require('./config/secrets.json')


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.6.12',
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    }
  },
  networks: {
    mainnet: {
      url: `http://eth-mainnet.ws.alchemyapi.io/v2/${alchemyAPIKey}`,
      //accounts: [
        //{
          //privateKey: deployerPrivateKey, balance: '10000000000000000000'
        //}
      //]
    },
    ropsten: {
      url: `http://eth-ropsten.alchemyapi.io/v2/${alchemyAPIKey}`,
      accounts: [deployerPrivateKey],
    },
    rinkeby: {
      url: `http://eth-rinkeby.alchemyapi.io/v2/${alchemyAPIKey}`,
      accounts: [deployerPrivateKey],
    },
    hardhat: {
      chainId: 1337,
      //accounts: [{ privateKey: deployerPrivateKey, balance: '1000000000000000000' }],
    },
  },
};

