import React, { useState } from 'react';
import './deploysection.css';
import { ethers } from 'ethers';
import atm_abi from "../artifacts/contracts/MyNFT.sol/MyNFT.json";

const DeploySection = ({ account }) => {
    const [contractAddress, setContractAddress] = useState(() => localStorage.getItem('contractAddress') || '');
    const [isContractDeployed, setIsContractDeployed] = useState(!!contractAddress);
    const [isDeploying, setIsDeploying] = useState(false);

    const deployContract = async () => {
        setIsDeploying(true);
        if (!window.ethereum) {
            alert('MetaMask wallet is required to deploy the contract');
            setIsDeploying(false);
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
            const contract = await factory.deploy();
            await contract.deployed();

            const address = contract.address;
            setContractAddress(address);
            localStorage.setItem('contractAddress', address);
            setIsContractDeployed(true);
            setIsDeploying(false);
        } catch (error) {
            alert('Deploying requested rejected:', error);
            setIsDeploying(false);
        }
    };

    return (
        <main className="container">
            <div className="acc_folio">
                <div className="acc_details">
                    <b>Your Account: <div className="wallet_address">{account}</div></b>
                </div>
                <div className="transactions">
                    {!isContractDeployed ? (
                        <div className="deploy-loader">
                        <button className="tr_child" onClick={deployContract}><b>Deploy</b></button><br />
                        {isDeploying && !isContractDeployed && (
                            <>
                            <span class="loader"></span>
                            <span class="loader-note">Deploying can take 15-20 seconds</span>
                            </>
                        )}
                        </div>
                    ) : (
                        <div className="acc_details">
                            <b>Contract Address: <div className="wallet_address">{contractAddress}</div></b>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default DeploySection;