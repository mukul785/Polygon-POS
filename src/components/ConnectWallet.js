import React from 'react';
import { useState, useEffect, useRef } from "react";
import { ethers } from 'ethers';
import atm_abi from "../artifacts/contracts/MyNFT.sol/MyNFT.json";
import './ConnectWallet.css';


const ConnectWallet = () => {
    const [ethWallet, setEthWallet] = useState(undefined);
    const [account, setAccount] = useState(undefined);
    const [atm, setATM] = useState(undefined);
    const [balance, setBalance] = useState(undefined);
    const buttonRef = useRef(null);

    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const atmABI = atm_abi.abi;

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
        getATMContract();
    };

    const getATMContract = () => {
        const provider = new ethers.BrowserProvider(ethWallet);
        const signer = provider.getSigner();
        const atmContract = new ethers.Contract(contractAddress, atmABI, signer);

        setATM(atmContract);
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
                    <p><b>Your Account: <div className="wallet_address">{account}</div></b></p>
                    <p><b>Your Balance: {balance} ETH</b></p>
                </div>
                <div className="transactions">
                    <button className="tr_child" ><b>Deposit</b></button>
                    <button className="tr_child" ><b>Withdraw</b></button>
                    <button className="tr_child" ><b>Transfer</b></button>
                    <button className="tr_child" ><b>Freeze</b></button>
                    <button className="tr_child" ><b>Unfreeze</b></button>
                    <button className="tr_child"><b>Coming soon!!!</b></button>
                </div>
                <div className="loan">
                    <button className="loan_child"><b>Request Loan</b></button>
                    <button className="loan_child"><b>Approve Loan</b></button>
                    <button className="loan_child"><b>Repay Loan</b></button>
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
