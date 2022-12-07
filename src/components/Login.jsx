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

    const [valEmail, setValEmail] = useState(true);
    const [valPassword, setValPassword] = useState(true);

    const [showPassword, setShowPassword] = useState("password")

    const context = useContext(Context);
    const navigate = useNavigate();

    const handleShowPassword = () => {
        if (showPassword === 'password'){
            setShowPassword('text')
        } else {
            setShowPassword('password')
        }
    }

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (!emailRegEx.test(form.email)) {
            setValEmail(false);
        } else {
            setValEmail(true);
        }

        if (form.password.length < 6) {
            setValPassword(false);
            return alert("Datos no válidos.");
        } else {
            setValPassword(true);
        }
        
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
            <form id="logInForm" className="form-control" onSubmit={handleSubmit}>
                <h4 className="fw-normal my-3 pb-3 text-center">Iniciar sesión</h4>
                {/* input de email */}
                <div className="form-outline mb-5 w-75 ">
                    <label className="form-label" for="form2Example1">Correo electrónico</label>
                    <input type="email" name="email" className="form-control" placeholder="correo@mail.com" 
                        value={form.email}
                        onChange={handleInputChange} />
                    <div className="val-name" hidden={valEmail}>
                        <i class="bi bi-exclamation-circle"></i>
                        <small>El email no es correcto.</small>
                    </div>
                </div>
                {/* input de contraseña */}
                <div className="form-outline mb-5 w-75">
                    <label className="form-label" for="form2Example2">Contraseña</label>
                    <div className="row">
                        <div className="col">
                            <input type={showPassword} name="password" className="form-control" placeholder="Contraseña" id="pass"
                                value={form.password}
                                onChange={handleInputChange} />
                        </div>
                        <div className="col-6 col-sm-4"> 
                            <button class="input-group-text" type="button" onClick={handleShowPassword}>Mostrar</button>
                        </div>
                    </div>
                    <div className="val-name" hidden={valPassword}>
                        <i class="bi bi-exclamation-circle"></i>
                        <small>La contraseña no es valida.</small>
                    </div>
                </div>
                {/* botón */}
                <div className="text-center">
                    <button type="sumbit" className="btn btn-primary btn-block mb-4">Iniciar sesión</button>
                </div>
                {/* links */}
                <div className="text-center mb-3">
                    <p>¿No tiene cuenta? <Link to={"/sing-in"}>Registrarse</Link></p>
                    <Link to={"/forgot-password"}>¿Olvidó su contraseña?</Link>
                </div>
            </form>
        </div>
    );
}