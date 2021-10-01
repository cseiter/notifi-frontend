import React from 'react';
import basic_app_logo from './basic_app_logo.png';

function Header() {

    return (
        <main>
            <div className="logo">
                <img src={basic_app_logo} width="100" height="40" alt="Notifi logo"/>
            </div>
            <div className="companyName">
                Notifi Ticketing System
            </div>
        </main>
    );
}

export default Header;