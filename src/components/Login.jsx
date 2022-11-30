import React, { useState }  from 'react';
import { Link } from 'react-router-dom';

import '../styles/form-login.css';

export const Login = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <div className="container py-5 h-100" id="div-form">
            <form id="logInForm" onSubmit={handleSubmit}>
                <h4 className="fw-normal mb-3 pb-3 text-center">Iniciar sesión</h4>
                {/* input de email */}
                <div className="form-outline mb-5 w-75 ">
                    <label className="form-label" for="form2Example1">Correo electrónico</label>
                    <input type="email" name="email" className="form-control" placeholder="correo@mail.com" 
                        value={form.email}
                        onChange={handleInputChange}/>
                </div>
                {/* input de contraseña */}
                <div className="form-outline mb-5 w-75">
                    <label className="form-label" for="form2Example2">Contraseña</label>
                    <input type="password" name="password" className="form-control" placeholder="Contraseña" 
                        value={form.password}
                        onChange={handleInputChange}/>
                </div>
                {/* botón */}
                <div className="text-center">
                    <button type="button" className="btn btn-primary btn-block mb-4">Iniciar sesión</button>
                </div>
                {/* links */}
                <div className="text-center">
                    <p>¿No tiene cuenta? <Link to={"/sing-in"}>Registrarse</Link></p>
                    <Link to={"/forgot-password"}>¿Olvidó su contraseña?</Link>
                </div>
            </form>
        </div>
    );
}