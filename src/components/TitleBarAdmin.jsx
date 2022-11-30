import React from 'react';

import '../styles/navigation-bar.css';
import logo from '../images/logol.png';

export const TitleBarAdmin = () => {
    return(
        <nav>
            <div className="logo">
                <img className="logo-img" src={logo} alt="Logo" />
            </div>
            <div className="nav-items">
                <li><a href="admin-view">Inicio</a></li>
            </div>
        </nav>
    );
}
