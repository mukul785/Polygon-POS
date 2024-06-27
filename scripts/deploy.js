async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const NFTContract = await ethers.getContractFactory("MyNFT");
  const nft = await NFTContract.deploy();
  await nft.deployed();

  console.log("Contract deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
