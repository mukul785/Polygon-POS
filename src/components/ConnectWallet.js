import React from 'react';
import { Link } from 'react-router-dom';
import './ConnectWallet.css';

const ConnectWallet = () => {
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
                                            <button type="button" className="thq-button-filled cta-button">
                                                <Link to="/deploy-section">Link Wallet</Link>
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
