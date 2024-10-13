import React from 'react';

const WalletConnect = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const connectWallet = () => {
        if (isMobile) {
            window.location.href = 'tonkeeper://connect/...';  // Replace with your WalletConnect URL
        } else {
            // Show QR code or connection flow for desktop
        }
    };

    return (
        <button onClick={connectWallet}>
            Connect Wallet
        </button>
    );
};

export default WalletConnect;