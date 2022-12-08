import React, { useContext }  from 'react';

import '../styles/navigation-bar.css';
import logo from '../images/logol.png';

import { Link, useNavigate } from 'react-router-dom';
import { Context, initialState } from '../context/context';

import { getAuth, signOut } from "firebase/auth";
import { useState } from 'react';

export const TitleBar = () => {

    const context = useContext(Context);
    const navigate = useNavigate();
    const { user } = context.state;

    const logOut = () => {

        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            context.setState(initialState);
            navigate("/");
        }).catch((error) => {
        // An error happened.
        });
    }
    
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
                    {
                        user ? 
                        <ul className="sub-menu">
                            <li> <a className="btn btn-danger" onClick={logOut}>Cerrar sesión</a> </li>
                        </ul> :
                        <ul className="sub-menu">
                            <li><Link to={"/login"}>Iniciar sesión</Link></li>
                            <li><Link to={"/sing-in"}>Crear cuenta</Link></li>    
                        </ul>
                    }
                </li>
                <li>
                    <Link to={"/shopping-car"}>Carrito 
                        <i className="bi bi-cart4">
                        </i>
                    </Link>
                </li>
            </div>
        </nav>
    );
}
