import React from 'react';
import basic_app_logo from './basic_app_logo.png';
import './Header.css';

function Header() {

    return (
        <main>
            <div className="headerContainer">
                <div className="logo">
                    <img src={basic_app_logo} alt="Notifi logo"/>
                </div>
                <div className="companyName">
                    Notifi Ticketing System
                </div>
            </div>
        </main>
    );
}

export default Header;