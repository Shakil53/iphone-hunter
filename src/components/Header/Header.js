import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='a  shadow fs-4 fw-bold '>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/order">Order</Link>


        </div>
    );
};

export default Header;