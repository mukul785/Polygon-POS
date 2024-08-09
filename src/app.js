import React,  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConnectWallet from './components/ConnectWallet';
import Navbar from './components/navbar';
import Hero from './components/hero';
import DeploySection from './components/deploysection';

const App = () => {
    const [account, setAccount] = useState(undefined);
    return (
        <React.StrictMode>
            <Router>
                <Navbar account={account} />
                <Hero />
                <Routes>
                    <Route path="/" element={<ConnectWallet />} />
                    <Route path="/deploy-section" element={<DeploySection setAccount={setAccount} />} />
                </Routes>
            </Router>
        </React.StrictMode>
    );
};

export default App;
