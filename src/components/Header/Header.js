import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => { 
    return (
        <div className="header-container">
            <nav className="navbar">
                <ul>
                    <li>
                        <Link className="link" to="/home">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/login">Login</Link>
                    </li>
                    <li>
                        <Link className="link" to="/book">Book</Link>
                    </li>
                </ul>
            </nav>
            <div className="header-info">
                <h1>Kutum Bari Bogura</h1>
                <h5>It feels like home...</h5>
            </div>
        </div>
    );
};

export default Header;