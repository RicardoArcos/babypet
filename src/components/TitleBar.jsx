import React  from 'react';

import '../styles/navigation-bar.css';
import logo from '../images/logol.png';
import { Link } from 'react-router-dom';

export const TitleBar = () => {
    return(
        <nav>
            <div className="logo">
                <img className="logo-img" src={logo} alt="Logo" />
            </div>
            <div className="nav-items">
                <li><Link to={"/"}>Inicio</Link></li>
                <li><Link to={"/categorias"}>Categorias</Link></li>
                <li><Link to={"/about-us"}>Acerca de</Link></li>
                <li><Link to={"/account"}>Cuenta</Link>
                    <ul className="sub-menu">
                        <li><Link to={"/login"}>Iniciar sesión</Link></li>
                        <li><Link to={"/sing-in"}>Crear cuenta</Link></li>    
                    </ul>
                </li>
                <li>
                    <Link to={"/shopping-car"}>Carrito 
                        <i className="bi bi-cart4">
                        </i>
                    </Link>
                </li>
            </div>
            <div className="searchbar">
                <form>
                    <input type="text" placeholder="Busque articulos aquí" />
                    <button type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    );
}
