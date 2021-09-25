import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="top-header">
                <h1>DU Concert bands list</h1>
                <h4>Dhaka University Batch of 2021 farewell ceremony. This all Bands will come. </h4>
                <h2>Total Budget of this Concert: <span>1 Millions</span></h2>
            </div>
            <div className="header-menu">
                <nav className="nav">
                    <a href="/home">Home</a>
                    <a href="/band">Band</a>
                    <a href="/farewell">Farewell</a>
                    <a href="/committee">Committee</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;