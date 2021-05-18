import React from 'react';

import HeaderItems from './headerItems';

import './styles.css';

const Header = () => {

    return (
        <nav 
            className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar"
            style={{ backgroundColor:'#ffff', opacity: '80%'}}
        >
            <div className="container">
                <a className="navbar-brand logo" href="/">Brand</a>

                <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                    <span className="visually-hidden">Toggle navigation</span>
                    <span className="navbar-toggler-icon"/>
                </button>

                <HeaderItems/>
                

                {/* <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/features">Features</a></li>
                        <li className="nav-item"><a className="nav-link" href="/pricing">Pricing</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about-us">About Us</a></li>
                        <li className="nav-item"><a className="nav-link" href="/contact-us">Contact Us</a></li>
                    </ul>
                </div> */}
            </div>
        </nav>        
    )
}

export default Header;