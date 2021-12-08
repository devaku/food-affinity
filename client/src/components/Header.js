import React from 'react';

function Header(props) {
    // console.log(props);
    return (
        <header className="header container z-text-yellow d-flex flex-row align-items-center justify-justify-content-start">
            <img
                className="fa-logo-icon"
                src="/assets/foodaffinity_logo.svg"
                alt="Food Affinity"
            />
            <div className="fa-menu-text z-text-brown">
                {props.categoryName ? props.categoryName : 'Menu'}
            </div>
        </header>
    );
}

export default Header;
