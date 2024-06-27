require("dotenv").config();

async function main() {
  const [deployer] = await ethers.getSigners();
  const nft = await ethers.getContractAt("MyNFT", "SEPOLIA_CONTRACT_ADDRESS");

  const tokenURIs = [
    "ipfs://QmYuHLH4iHDsSUDBBijyLtD6WiXAhS6CkprVfmPbzYKKCZ",
    "ipfs://QmPjYHrzoqdwSSEyv93kzCttzHAtLFCM4yFdiguKbdoKPQ",
    "ipfs://QmQ2E1oreSgzaA7qyWfmR3v9k4M9eBgPjCWT7ku5pDBMMc",
    "ipfs://QmVNRc3Kaqqjjk9hqx7fT4ngefxVhqJgjNLfiJQxAFd6E1",
    "ipfs://QmZ7nEq25uS9NuPCxSpbrnEGEYv1wrXeTJpk4AZQp1WtWz"
  ];

  const prompts = [
    "An intricately detailed illustration of the first-ever Bitcoin block, 'The Genesis Block' surrounded by binary code and circuit patterns. The background features an abstract representation of blockchain nodes interconnected in a vast network.",
    "A vibrant piece where a stream of code morphs into a digital phoenix rising from the ashes. The code fragments turn into feathers, symbolizing the transformative power of coding and technology.",
    "An artwork showcasing a space explorer navigating through a galaxy of cryptocurrencies. The explorer’s spaceship is surrounded by floating tokens like Bitcoin, Ethereum, and various altcoins, each represented as glowing celestial bodies.",
    "A portal-like depiction leading into the Metaverse, with digital avatars, virtual landscapes, and futuristic cityscapes visible through the gateway. The entrance is framed by holographic interfaces and blockchain symbols, representing the seamless integration of virtual worlds with blockchain technology.",
    "A conceptual piece illustrating the potential of quantum computing. A quantum computer is depicted breaking complex cryptographic codes, with quantum bits (qubits) in superposition, visualized as entangled light particles."
  ];

  for (let i = 0; i < tokenURIs.length; i++) {
    await nft.mintNFT(tokenURIs[i], prompts[i]);
    console.log(`Minted NFT with ID ${i} to owner with prompt: ${prompts[i]}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
