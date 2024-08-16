import React, { useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ConnectWallet.css';

const ConnectWallet = ({setAccount}) => {
    const navigateTo = useNavigate();

    const getWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                handleAccount(accounts);
                navigateTo('/deploy-section');
            } catch (error) {
                console.error('User rejected the request:', error);
            }
        } 
        else {
            console.log('MetaMask is not installed.');
        }
    };
    

    const handleAccount = async (account) => {
        if (account.length > 0) {
            setAccount(account[0]);
            localStorage.setItem('account',account[0]);
            console.log("Account connected: ", account[0]);
        }
        else {
            console.log("No account found");
        }
    }
    return (
        <main className="container">
            <div className="thq-section-padding">
                <div className="thq-section-max-width">
                    <div className="cta-accent2-bg">
                        <div className="cta-accent1-bg">
                            <div className="cta-container1">
                                <div className="cta-content">
                                    <span className="thq-heading-2">Connect Your Wallet</span>
                                    <p className="thq-body-large">Link your preferred wallet to start bridging NFTs</p>
                                </div>
                                <div className="cta-actions">
                                    <button type="button" className="thq-button-filled cta-button" onClick={getWallet}>
                                        Link Wallet
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default ConnectWallet;
