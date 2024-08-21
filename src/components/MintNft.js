import React, {useRef} from "react";
import './MintNft.css';
import atm_abi from "../artifacts/contracts/MyNFT.sol/MyNFT.json";

const MintNft = ({account, contractAddress}) => {
    const UrlRef = useRef('');
    const DscRef  = useRef('');
    const MintNftTo = async ()=>{
        if (!window.ethereum) {
            alert('MetaMask wallet is required to deploy the contract');
            return;
        }
        try {
            const network = await window.ethereum.request({ method: 'net_version' });
            if (network !== '11155111') {
                alert('Please switch to the Sepolia network in MetaMask');
                setIsDeploying(false);
                return;
            }

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const factory = new ethers.ContractFactory(atm_abi.abi, atm_abi.bytecode, signer);
            const nft = await ethers.getContractAt(atm_abi.abi, {contractAddress});
            const NFT = await nft.mintNFT({account}, UrlRef.current.valueOf, DscRef.current.valueOf);
        } catch (error) {
            alert('Minting terminated', error);
        }
    }
    return(
        <>
        <div className="mint-main">
            <div className="head">Mint NFT</div>
            <div className="input-area">
                <div className="in-div">
                    <div className="head-in">Enter URL:</div>
                    <input type="text" name="URL" ref={UrlRef} className="text-in" placeholder="URL goes here..." id="UrlNft" />
                </div>
                <div className="in-div">
                    <div className="head-in">Enter Description:</div>
                    <input type="text" name="Description" ref={DscRef} className="text-in" placeholder="Description for URL..." id="descriptionNft" />
                </div>
            </div>
            <div className="mint-button">
                <button className="mint-btn" onClick={MintNftTo}>Mint</button>
            </div>
        </div>
        </>
    );
}

export default MintNft;