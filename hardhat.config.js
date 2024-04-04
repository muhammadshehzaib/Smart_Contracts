require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: process.env.TESTNET_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: "0.8.24",
};
