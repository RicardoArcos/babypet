import '../styles/form-login.css';

export const SingIn = () => {
    return (
        <div className="container py-5 h-100" id="div-form">
            <form>
                <h4 className="fw-normal mb-3 pb-3 text-center">Crear una nueva cuenta</h4>
                {/* campo de nombre */}
                <div className="form-outline mb-4 w-75 ">
                    <label className="form-label" for="form2Example1">Nombre(s):</label>
                    <input type="email" id="form2Example1" className="form-control " placeholder="Juan" />
                </div>

                {/* campo de apellidos*/}
                <div className="form-outline mb-4 w-75 ">
                    <label className="form-label" for="form2Example1">Apellido(s):</label>
                    <input type="email" id="form2Example1" className="form-control " placeholder="Pérez" />
                </div>

                {/* campo de correo */}
                <div className="form-outline mb-4 w-75 ">
                    <label className="form-label" for="form2Example1">Correo electrónico:</label>
                    <input type="email" id="form2Example1" className="form-control " placeholder="correo@mail.com" />
                </div>

                {/* campo de numero de telefono */}
                <div className="form-outline mb-4 w-75 ">
                    <label className="form-label" for="form2Example1">Número de teléfono:</label>
                    <input type="email" id="form2Example1" className="form-control " placeholder="0123456789" />
                </div>

                {/* campo de contraseña */}
                <div className="form-outline mb-4 w-75">
                    <label className="form-label" for="form2Example2">Contraseña:</label>
                    <input type="password" id="form2Example2" className="form-control" placeholder="Contraseña" />
                </div>

                {/* campo de confirmar contraseña */}
                <div className="form-outline mb-5 w-75">
                    <label className="form-label" for="form2Example2">Confirmar contraseña:</label>
                    <input type="password" id="form2Example2" className="form-control" placeholder="Repetir contraseña" />
                </div>

                <div className="text-center">
                    <button type="button" className="btn btn-primary btn-block mb-4">Crear cuenta</button>
                </div>

                <div className="text-center">
                    <p>¿Ya tiene cuenta? <a href="login">Iniciar sesión</a></p>
                </div>
            </form>
        </div>
    );
}