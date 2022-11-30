import React  from 'react';

export const ForgotPassword = () => {
    return(
        <div className="container py-5 h-100 w-100" id="div-form">
            <form>
                <h4 className="fw-normal mb-3 pb-3 text-center">Restablecer contraseña</h4>
                <label className="form-label text-center">Escriba su número de telefono o correo para recibir instrucciones para restablecer su contraseña.</label>
                {/* input de correo o teléfono */}
                <div className="form-outline pt-5 mb-5 w-75 ">
                    <label className="form-label" for="form2Example1">Correo electrónico o número de teléfono:</label>
                    <input type="email" id="form2Example1" className="form-control" />
                </div>
                {/* botón */}
                <div className="text-center">
                    <button type="button" className="btn btn-primary btn-block mb-4">Enviar</button>
                </div>
            </form>
        </div>
    );
}