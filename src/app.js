import React from 'react';
import ConnectWallet from './components/ConnectWallet';
import NavBar from './components/NavBar';


const App = () => {
    return (
        <React.StrictMode>
            <NavBar />
            <ConnectWallet />
        </React.StrictMode>
    );
};

export default App;
