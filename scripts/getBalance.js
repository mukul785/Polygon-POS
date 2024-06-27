// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const nftContract = await hre.ethers.getContractAt("MyNFT", "0xd8B5318B4BD5a706118b35819ED16759B7729941");

  const balance = await nftContract.balanceOf(deployer.address);
  console.log(`Balance of NFTs on Sepolia for address ${deployer.address}: ${balance}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
