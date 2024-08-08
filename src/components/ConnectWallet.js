import React from 'react';
import { useState, useEffect, useRef } from "react";
import { ethers } from 'ethers';
import atm_abi from "../artifacts/contracts/MyNFT.sol/MyNFT.json";
import './ConnectWallet.css';

const ConnectWallet = () => {
    const [ethWallet, setEthWallet] = useState(undefined);
    const [account, setAccount] = useState(undefined);
    // const [atm, setATM] = useState(undefined);
    const [balance, setBalance] = useState(undefined);
    const buttonRef = useRef(null);
    // const [contractAddress, setContractAddress] = useState(undefined);
    // const atmABI = atm_abi.abi;

    const getWallet = async () => {
        if (window.ethereum) {
            setEthWallet(window.ethereum);
        }

        if (ethWallet) {
            const account = await ethWallet.request({ method: "eth_accounts" });
            handleAccount(account);
        }
    }

    const handleAccount = (account) => {
        if (account) {
            console.log("Account connected: ", account);
            setAccount(account);
        }
        else {
            console.log("No account found");
        }
    }

    const connectAccount = async () => {
        if (!ethWallet) {
            alert('MetaMask wallet is required to connect');
            return;
        }

        const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
        handleAccount(accounts);

        // once wallet is set we can get a reference to our deployed contract
        // getATMContract();
    };

    // const getATMContract = () => {
        // const provider = new ethers.BrowserProvider(ethWallet);
        // const signer = provider.getSigner();
        // const atmContract = new ethers.Contract(contractAddress, atmABI, signer);
        // setATM(atmContract);
    // }

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

    const handleMouseMove = (event) => {
        const button = buttonRef.current;
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        button.style.setProperty('--mouse-x', `${x}px`);
        button.style.setProperty('--mouse-y', `${y}px`);
    }

    const initUser = () => {
        // Check to see if user has Metamask
        if (!ethWallet) {
            return <p>Please install Metamask in order to use this ATM.</p>
        }

        // Check to see if user is connected. If not, connect to their account
        if (!account) {
            return (
                <>
                <h3 className="con_btn_title">Please connect your Metamask wallet</h3>
                <button ref={buttonRef} className="con_btn" onClick={connectAccount} onMouseMove={handleMouseMove}>
                <span className="con_btn_content">
                    Link
                </span>
                </button>
                </>
            )
        }

        // if (balance == undefined) {
        //     getBalance();
        // }

        return (
            <div className="acc_folio">
                <div className="acc_details">
                    <b>Your Account: <div className="wallet_address">{account}</div></b>
                    <p><b>Your Balance: {balance} ETH</b></p>
                </div>
                <div className="transactions">
                    <button className="tr_child" onClick={deployContract}><b>Deploy</b></button>
                </div>
            </div>
        )
    }

    useEffect(() => { getWallet(); }, []);

    return (
        <main className="container">
            <header className="header"><h1>Welcome to the Mukul's ATM!</h1></header>
            {initUser()}
        </main>
    )
};

export default ConnectWallet;
