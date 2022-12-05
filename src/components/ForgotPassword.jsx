import React, { useState } from 'react';

import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export const ForgotPassword = () => {

    const [form, setForm] = useState({
        email: ''
    });

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const auth = getAuth();
        sendPasswordResetEmail(auth, form.email)
            .then(() => {
                // Password reset email sent!
                // ..
                return alert("Se ha enviado un correo a la dirección que proporcionó.")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                return alert(errorMessage)
                // ..
            });
    }

    return (
        <div className="container py-5 h-100 w-100" id="div-form">
            <form onSubmit={handleSubmit}>
                <h4 className="fw-normal mb-3 pb-3 text-center">Restablecer contraseña</h4>
                <label className="form-label text-center">Escriba su correo para recibir instrucciones para restablecer su contraseña.</label>
                {/* input de correo*/}
                <div className="form-outline pt-5 mb-5 w-75 ">
                    <label className="form-label" for="form2Example1">Correo electrónico:</label>
                    <input type="email" id="form2Example1" className="form-control" name="email"
                        value={form.email}
                        onChange={handleInputChange} />
                </div>
                {/* botón */}
                <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block mb-4">Enviar</button>
                </div>
            </form>
        </div>
    );
}