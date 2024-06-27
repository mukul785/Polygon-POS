// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");

const tokenAddress = "0xF748d08cbb4Db7ebd365c8f1093f40b0b8A42a71"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const fxERC20RootAddress = "0x4B915DC5D123631C53aE619D2222f7124a2143Fa";
const walletAddress = "0xd8B5318B4BD5a706118b35819ED16759B7729941"; // place your public address for your wallet here

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // Get the contract instances
  const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC20RootAddress);

  // Approve tokens to be deposited
  const approveTx = await tokenContract.approve(fxERC20RootAddress, 500); // Replace 500 with the amount to approve
  await approveTx.wait();
  console.log('Approval confirmed');

  // Deposit tokens to the bridge contract
  const depositTx = await fxContract.deposit(tokenAddress, walletAddress, 500, "0x6556"); // Replace 500 with the amount to deposit
  await depositTx.wait();
  console.log("Tokens deposited");
  
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });