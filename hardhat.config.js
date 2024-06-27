require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.18",
  networks: {
    amoy: {
      url: 'https://polygon-amoy.infura.io/v3/a774f850ec4741a098bcdfe3df757ab9',
      accounts: ['5432c50c6a9df32cb99e1f0995b8b72890e1ea074ac484a100643ccf10ed8174'],
    },
    sepolia: {
      url: 'https://sepolia.infura.io/v3/a774f850ec4741a098bcdfe3df757ab9',
      accounts: ['5432c50c6a9df32cb99e1f0995b8b72890e1ea074ac484a100643ccf10ed8174'],
    },
  }
};
