import React from 'react';
import logo from '../../logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-link'>
                <a href="/home">Home</a>
                <a href="/products">Products</a>
                <a href="/about">About</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;