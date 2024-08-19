import React,  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConnectWallet from './components/ConnectWallet';
import Navbar from './components/navbar';
import Hero from './components/hero';
import DeploySection from './components/deploysection';
import MintNft from './components/MintNFT';
import Steps from './components/Steps';
import References from './components/References';


const App = () => {
    const [account, setAccount] = useState(() => localStorage.getItem('account') || undefined);
    const [contractAddress, setContractAddress] = useState(() => localStorage.getItem('contractAddress') || '');

    return (
        <React.StrictMode>
            <Router>
                <Navbar account={account} />
                <Hero />
                <Routes>
                    <Route path="/" element={<ConnectWallet setAccount={setAccount} />} />
                    <Route path="/deploy-section" element={<DeploySection account={account} contractAddress={contractAddress} setContractAddress={setContractAddress} />} />
                </Routes>
                {contractAddress!='' && (
                    <MintNft account={account} contractAddress={contractAddress} />
                )}
                <Steps />
                <References />
            </Router>
        </React.StrictMode>
    );
};

export default App;