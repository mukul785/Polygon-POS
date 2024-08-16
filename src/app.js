import React,  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConnectWallet from './components/ConnectWallet';
import Navbar from './components/navbar';
import Hero from './components/hero';
import DeploySection from './components/deploysection';

const App = () => {
    const [account, setAccount] = useState(() => {
        return localStorage.getItem('account') || undefined;
    });
    return (
        <React.StrictMode>
            <Router>
                <Navbar account={account} />
                <Hero />
                <Routes>
                    <Route exact path="/" element={<ConnectWallet setAccount={setAccount} />} />
                    <Route exact path="/deploy-section" element={<DeploySection account={account} />} />
                </Routes>
            </Router>
        </React.StrictMode>
    );
};

export default App;
