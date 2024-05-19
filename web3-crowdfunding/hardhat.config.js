require("@matterlabs/hardhat-zksync-solc");
require("dotenv").config();

const ARB_RPC_URL = process.env.ARB_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    // zksync_testnet: {
    //   url: "https://zksync2-testnet.zksync.dev",
    //   ethNetwork: "goerli",
    //   chainId: 280,
    //   zksync: true,
    // },
    // zksync_mainnet: {
    //   url: "https://zksync2-mainnet.zksync.io/",
    //   ethNetwork: "mainnet",
    //   chainId: 324,
    //   zksync: true,
    // },
    hardhat: {
      chainId: 1337,
    },
    arbitrum: {
      url: ARB_RPC_URL,
      chainId: 421614,
      accounts: [PRIVATE_KEY],
    },
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
