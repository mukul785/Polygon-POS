const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const tokenAddress = "0x26D2ac0b732d40C9499Be9a209e5a11f6d49B47b"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xd8B5318B4BD5a706118b35819ED16759B7729941"; 

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    for (let i = 0; i < 5; i++) {
        try {
            const owner = await token.ownerOf(i);
            console.log(`Token ID ${i} is owned by: ${owner}`);
            
            const promptDescription = await token.promptDescription(i);
            console.log(`Prompt description for token ID ${i}: ${promptDescription}`);
        } catch (error) {
            console.error(`Error fetching prompt description for token ID ${i}:`, error.message);
        }
    }
    
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});