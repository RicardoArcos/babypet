import React, { useContext, useState }  from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { Context } from '../context/context';

import '../styles/form-login.css';

export const Login = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const context = useContext(Context);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const auth = getAuth();
        signInWithEmailAndPassword(auth, form.email, form.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                context.setState({
                    ...context.state,
                    user
                })
                navigate("/");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
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
                    <button type="sumbit" className="btn btn-primary btn-block mb-4">Iniciar sesión</button>
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