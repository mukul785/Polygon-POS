import React from 'react';
import { useState, useEffect, useRef } from "react";
import { ethers } from 'ethers';
import atm_abi from "../artifacts/contracts/MyNFT.sol/MyNFT.json";
import './ConnectWallet.css';

const ConnectWallet = ({ setAccount }) => {
    const [ethWallet, setEthWallet] = useState(undefined);
    const [account, setThisAccount] = useState(undefined);
    const [balance, setBalance] = useState(undefined);

    const getWallet = async () => {
        if (window.ethereum) {
            setEthWallet(window.ethereum);
        }

        if (ethWallet) {
            const account = await ethWallet.request({ method: "eth_accounts" });
            handleAccount(account);
        }
    }

    const handleAccount = async (account) => {
        if (account.length > 0) {
            console.log("Account connected: ", account[0]);
            setThisAccount(account[0]);
            setAccount(account[0]);
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const balance = await provider.getBalance(account[0]);
            setBalance(ethers.utils.formatEther(balance));
        }
        else {
            console.log("No account found");
        }
    }

    const deployContract = async () => {
        if (!window.ethereum) {
            alert('MetaMask wallet is required to deploy the contract');
            return;
        }

        try {
            const network = await window.ethereum.request({ method: 'net_version' });
            if (network !== '11155111') {
                alert('Please switch to the Sepolia network in MetaMask');
                return;
            }
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const factory = new ethers.ContractFactory(atm_abi.abi, atm_abi.bytecode, signer);

            const contract = await factory.deploy();
            await contract.deployed();

            console.log('Contract deployed at:', contract.address);
            alert('Contract deployed at: ' + contract.address);
            return contract.address;
        } catch (error) {
            console.error('Error deploying contract:', error);
            alert('Failed to deploy contract. See console for details.');
        }
    }

    useEffect(() => { getWallet(); }, [ethWallet]);
    return (
        <main className="container">
            <div className="acc_folio">
                <div className="acc_details">
                    <b>Your Account: <div className="wallet_address">{account}</div></b>
                    <p><b>Your Balance: {balance !== undefined ? `${balance} ETH` : "N/A"}</b></p>
                </div>
                <div className="transactions">
                    <button className="tr_child" onClick={deployContract}><b>Deploy</b></button>
                </div>
            </div>
        </main>
    )
};

export default ConnectWallet;
