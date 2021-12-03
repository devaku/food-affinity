import React from 'react';

function Header(props) {
    return (
        <header className="header container z-text-yellow d-flex flex-row align-items-center">
            <img
                className="fa-logo-icon"
                src="/assets/foodaffinity_logo.svg"
                alt="Food Affinity"
                style={{ marginRight: '15px' }}
            />
            <div className="fa-menu-text z-text-brown">Chicken</div>
        </header>
    );
}

export default Header;
