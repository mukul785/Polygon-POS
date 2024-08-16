import React from 'react'
import logo from '../assets/nft-logo.png';
import './navbar.css';
import '../index.css';

const Navbar = ({account}) => {
    return (
        <header className="navbar-container">
            <header data-thq="thq-navbar" className="navbar-navbar-interactive">
                <img
                    alt='NFT Bridge Logo'
                    src={logo}
                    className="navbar-image1"
                />
                <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
                    <nav className="navbar-links">
                        {/* <span className="thq-link thq-body-small"><Link to="/connect-wallet">Home</Link></span> */}
                        {/* <span className="thq-link thq-body-small">Deploy</span> */}
                        {/* <span className="thq-link thq-body-small">Mint</span> */}
                        {/* <span className="thq-link thq-body-small">Approve</span> */}
                        {/* <span className="thq-link thq-body-small">Collection</span> */}
                    </nav>
                    <div className="navbar-buttons">
                        {/* <button className="navbar-action1 thq-button-animated thq-button-filled">
                            <span className="thq-body-small">Link Wallet</span>
                        </button> */}
                        <button className="navbar-action2 thq-button-outline thq-button-animated">
                            <span className="thq-body-small">{ account === undefined ? 'Wallet Address' : account}</span>
                        </button>
                    </div>
                </div>
                <div data-thq="thq-burger-menu" className="navbar-burger-menu">
                    <svg viewBox="0 0 1024 1024" className="navbar-icon">
                        <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                </div>
                <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
                    <div className="navbar-nav">
                        <div className="navbar-top">
                            <img
                                alt='NFT Bridge Logo'
                                src={logo}
                                className="navbar-logo"
                            />
                            <div data-thq="thq-close-menu" className="navbar-close-menu">
                                <svg viewBox="0 0 1024 1024" className="navbar-icon2">
                                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                                </svg>
                            </div>
                        </div>
                        {/* <nav className="navbar-links1">
                            <span className="thq-link thq-body-small">Home</span>
                            <span className="thq-link thq-body-small">Deploy</span>
                            <span className="thq-link thq-body-small">Mint</span>
                            <span className="thq-link thq-body-small">Approve</span>
                            <span className="thq-link thq-body-small">Collection</span>
                        </nav> */}
                    </div>
                    <div className="navbar-buttons1">
                        <button className="thq-button-filled">Login</button>
                        <button className="thq-button-outline">Register</button>
                    </div>
                </div>
            </header>
        </header>
    )
}


export default Navbar
