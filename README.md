# ERC721 NFT bridge with Sepolia and Amoy Testnet Using fxPortal
This project demonstrates how to use the fxPortal contracts to transfer ERC721 NFTs from Sepolia to Amoy.

### Steps for Bridging

1. Run `npm i` to install dependencies
2. Update your private key in the .env.examples file and rename to .env when finished
3. Run `npx hardhat run scripts/deploy.js --network sepolia` to deploy ERC721 contract.
4. Paste the newly deployed contract address in the tokenAddress variable for the other scripts
5. Run `npx hardhat run scripts/mint.js --network sepolia` to mint NFTs to your wallet
6. Run `npx hardhat run scripts/approveDeposit.js --network sepolia` to approve and deposit your NFTs to polygon
7. Wait 20-30 minutes for NFTs to show on polygon account
8. Use the polygon contract address for your getBalance script's tokenAddress
9. Run `npx hardhat run scripts/getBalance.js --network amoy` to see the new polygon NFT balance.
