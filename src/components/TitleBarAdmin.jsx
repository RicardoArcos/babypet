import React from 'react';

import '../styles/navigation-bar.css';
import logo from '../images/logol.png';
import { Link } from 'react-router-dom';

export const TitleBarAdmin = () => {
    return(
        <nav>
            <div className="logo">
                <img className="logo-img" src={logo} alt="Logo" />
            </div>
            <div className="nav-items">
                <li><Link to={"/admin-view"}>Inicio</Link></li>
            </div>
        </nav>
    );
}
