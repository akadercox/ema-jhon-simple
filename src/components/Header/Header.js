import React from 'react';
import logo from '../../images/Logo.svg'
import  './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img className='nav-img' src={logo} alt="" />
            <div className='nav-menu'>
                <a href="/order">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;