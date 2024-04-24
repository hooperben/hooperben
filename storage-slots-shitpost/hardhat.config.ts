import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const { PRIVATE_KEY, INFURA_API_KEY, ALCHEMY_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY!}`,
      chainId: 1,
      accounts: [PRIVATE_KEY!],
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY!}`,
      chainId: 11155111,
      accounts: [PRIVATE_KEY!],
    },
  },
};

export default config;
