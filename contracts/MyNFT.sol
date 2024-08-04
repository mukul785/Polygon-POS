// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, Ownable {
    uint256 public tokenCounter;
    mapping(uint256 => string) private _tokenURIs;
    mapping(uint256 => string) private _prompts;

    constructor() ERC721("MyNFT", "MFT") {
        tokenCounter = 0;
    }

    function mintNFT(string memory nftURL, string memory prompt) public onlyOwner {
        uint256 newItemId = tokenCounter;
        _safeMint(owner(), newItemId);
        _tokenURIs[newItemId] = nftURL; 
        _prompts[newItemId] = prompt;
        tokenCounter += 1;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(tokenId <= tokenCounter, "ERC721Metadata: URI query for nonexistent token");
        return _tokenURIs[tokenId];
    }
    function promptDescription(uint256 tokenId) public view returns (string memory) {
        require(tokenId <= tokenCounter, "Prompt query for nonexistent token");
        return _prompts[tokenId];
    }
}
