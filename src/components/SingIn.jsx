import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { db } from '../firebase/firebase-config';
import { doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import '../styles/form-login.css';

export const SingIn = () => {

    const [form, setForm] = useState({
        names: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        repeatPassword: ''
    });

    const [valName, setValName] = useState(true);
    const [valLastName, setValLastName] = useState(true);
    const [valEmail, setValEmail] = useState(true);
    const [valPhone, setValPhone] = useState(true);
    const [valPassword, setValPassword] = useState(true);
    const [valRepPassword, setValRepPassword] = useState(true);

    const [showPassword, setShowPassword] = useState("password")
    const [showRepPassword, setShowRepPassword] = useState("password")

    const handleShowPassword = () => {
        if (showPassword === 'password'){
            setShowPassword('text')
        } else {
            setShowPassword('password')
        }
    }

    const handleShowRepPassword = () => {
        if (showRepPassword === 'password'){
            setShowRepPassword('text')
        } else {
            setShowRepPassword('password')
        }
    }

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.names === '' || form.names.length < 3) {
            setValName(false);
        } else {
            setValName(true)
        }

        if (form.lastName === '' || form.lastName.length < 3) {
            setValLastName(false);
        } else {
            setValLastName(true);
        }

        const emailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (!emailRegEx.test(form.email)) {
            setValEmail(false);
        } else {
            setValEmail(true);
        }

        const phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        if (!phoneRegEx.test(form.phoneNumber)) {
            setValPhone(false);
        } else {
            setValPhone(true);
        }

        if (form.password.length < 6) {
            setValPassword(false);
        } else {
            setValPassword(true);
        }

        if (form.password === form.repeatPassword && form.repeatPassword !== '') {
            setValRepPassword(true);
        } else {
            setValRepPassword(false);
            return alert("Datos no validados");
        }

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, form.email, form.password)
            .then(async (userCredential) => {
                // Signed in 
                const user = userCredential.user;
                let obj = {
                    names: form.names,
                    lastName: form.lastName,
                    email: form.email,
                    phoneNumber: form.phoneNumber,
                    password: form.password,
                    role: "user" // admin | guest
                }

                await setDoc(doc(db, "users", user.uid), obj);
                // ...
                // context.setState({
                //     ...context.state,
                //     user
                // })
                // navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    return (
        <div className="container py-4 h-100" id="div-form">
            <form className="form-control" id="signInForm" onSubmit={handleSubmit}>
                <h4 className="fw-normal my-3 pb-3 text-center">Crear una nueva cuenta</h4>
                {/* campo de nombre */}
                <div className="form-outline mb-4 w-75 ">
                    <label className="form-label" for="form2Example1">Nombre(s):</label>
                    <input type="text" name="names" className="form-control " placeholder="Juan"
                        value={form.names}
                        onChange={handleInputChange} />
                    <div className="val-name" hidden={valName}>
                        <i class="bi bi-exclamation-circle"></i>
                        <small>El nombre no es válido.</small>
                    </div>
                </div>

                {/* campo de apellidos*/}
                <div className="form-outline mb-4 w-75 ">
                    <label className="form-label" for="form2Example1">Apellido(s):</label>
                    <input type="text" name="lastName" className="form-control " placeholder="Pérez"
                        value={form.lastName}
                        onChange={handleInputChange} />
                    <div className="val-name" hidden={valLastName}>
                        <i class="bi bi-exclamation-circle"></i>
                        <small>El apellido no puede quedar vacío.</small>
                    </div>
                </div>

                {/* campo de correo */}
                <div className="form-outline mb-4 w-75 ">
                    <label className="form-label" for="form2Example1">Correo electrónico:</label>
                    <input type="email" name="email" className="form-control " placeholder="correo@mail.com"
                        value={form.email}
                        onChange={handleInputChange} />
                    <div className="val-name" hidden={valEmail}>
                        <i class="bi bi-exclamation-circle"></i>
                        <small>El email no es correcto.</small>
                    </div>
                </div>

                {/* campo de numero de telefono */}
                <div className="form-outline mb-4 w-75 ">
                    <label className="form-label" for="form2Example1">Número de teléfono:</label>
                    <input type="text" name="phoneNumber" className="form-control " placeholder="0123456789"
                        value={form.phoneNumber}
                        onChange={handleInputChange} />
                   <div className="val-name" hidden={valPhone}>
                        <i class="bi bi-exclamation-circle"></i>
                        <small>El número no es correcto.</small>
                    </div>
                </div>

                {/* campo de contraseña */}
                <div className="form-outline mb-4 w-75">
                    <label className="form-label" for="form2Example2">Contraseña:</label>
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

                {/* campo de confirmar contraseña */}
                <div className="form-outline mb-3 w-75">
                    <label className="form-label" for="form2Example2">Confirmar contraseña:</label>
                    <div className="row">
                        <div className="col">
                            <input type={showRepPassword} name="repeatPassword" className="form-control" placeholder="Repetir contraseña"
                                value={form.repeatPassword}
                                onChange={handleInputChange} />
                        </div>
                        <div className="col-6 col-sm-4">
                            <button class="input-group-text" type="button" onClick={handleShowRepPassword}>Mostrar</button>
                        </div>
                    </div>
                    <div className="val-name" hidden={valRepPassword}>
                        <i class="bi bi-exclamation-circle"></i>
                        <small>Las contraseñas no coinciden.</small>
                    </div>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                        Crear cuenta
                    </button>
                </div>

                <div className="text-center">
                    <p>¿Ya tiene cuenta? <Link to={"/login"}>Iniciar sesión</Link></p>
                </div>
            </form>
        </div>
    );
}