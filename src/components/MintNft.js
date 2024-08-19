import React from "react";
import atm_abi from "../artifacts/contracts/MyNFT.sol/MyNFT.json";

const MintNft = ({account, contractAddress}) => {
    return(
        <>
        <div>
            <h1>Mint </h1>
            <p>{account}</p><br />
            <p>{contractAddress}</p>
        </div>
        </>
    );
}

export default MintNft;