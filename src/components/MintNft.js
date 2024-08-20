import React from "react";
import './MintNft.css';
import atm_abi from "../artifacts/contracts/MyNFT.sol/MyNFT.json";

const MintNft = ({account, contractAddress}) => {
    return(
        <>
        <div className="mint-main">
            <div className="head">Mint NFT</div>
            <div className="input-area">
                <div className="in-div">
                    <div className="head-in">Enter URL:</div>
                    <input type="text" name="URL" className="text-in" id="UrlNft" />
                </div>
                <div className="in-div">
                    <div className="head-in">Enter Description:</div>
                    <input type="text" name="Description" id="descriptionNft" />
                </div>
            </div>
        </div>
        </>
    );
}

export default MintNft;