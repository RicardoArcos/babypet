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

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(form.password !== form.repeatPassword) {
            return alert("Las contraseñas no coinciden");
        }

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, form.email, form.password)
        .then(async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            let obj = {
                names: form.names,
                lastName: form.lastName,
                email: form.email,
                phoneNumber: form.phoneNumber,
                password: form.password,
            }
    
            await setDoc(doc(db, "users", user.uid), obj);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    return (
        <div className="container py-5 h-100" id="div-form">
            <form id="signInForm" onSubmit={handleSubmit}>
                <h4 className="fw-normal mb-3 pb-3 text-center">Crear una nueva cuenta</h4>
                {/* campo de nombre */}
                <div className="form-outline mb-4 w-75 ">
                    <label className="form-label" for="form2Example1">Nombre(s):</label>
                    <input type="text" name="names" className="form-control " placeholder="Juan"
                        value={form.names}
                        onChange={handleInputChange} />
                </div>

                {/* campo de apellidos*/}
                <div className="form-outline mb-4 w-75 ">
                    <label className="form-label" for="form2Example1">Apellido(s):</label>
                    <input type="text" name="lastName" className="form-control " placeholder="Pérez"
                        value={form.lastName}
                        onChange={handleInputChange} />
                </div>

                {/* campo de correo */}
                <div className="form-outline mb-4 w-75 ">
                    <label className="form-label" for="form2Example1">Correo electrónico:</label>
                    <input type="email" name="email" className="form-control " placeholder="correo@mail.com"
                        value={form.email}
                        onChange={handleInputChange} />
                </div>

                {/* campo de numero de telefono */}
                <div className="form-outline mb-4 w-75 ">
                    <label className="form-label" for="form2Example1">Número de teléfono:</label>
                    <input type="text" name="phoneNumber" className="form-control " placeholder="0123456789"
                        value={form.phoneNumber}
                        onChange={handleInputChange} />
                </div>

                {/* campo de contraseña */}
                <div className="form-outline mb-4 w-75">
                    <label className="form-label" for="form2Example2">Contraseña:</label>
                    <input type="password" name="password" className="form-control" placeholder="Contraseña"
                        value={form.password}
                        onChange={handleInputChange} />
                </div>

                {/* campo de confirmar contraseña */}
                <div className="form-outline mb-5 w-75">
                    <label className="form-label" for="form2Example2">Confirmar contraseña:</label>
                    <input type="password" name="repeatPassword" className="form-control" placeholder="Repetir contraseña"
                        value={form.repeatPassword}
                        onChange={handleInputChange} />
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