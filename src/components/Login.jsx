import '../styles/form-login.css';

export const Login = () => {
    return (
        <div className="container py-5 h-100" id="div-form">
            <form>
                <h4 className="fw-normal mb-3 pb-3 text-center">Iniciar sesión</h4>

                <div className="form-outline mb-5 w-75 ">
                    <label className="form-label" for="form2Example1">Correo electrónico</label>
                    <input type="email" id="form2Example1" className="form-control " placeholder="correo@mail.com" />
                </div>

                <div className="form-outline mb-5 w-75">
                    <label className="form-label" for="form2Example2">Contraseña</label>
                    <input type="password" id="form2Example2" className="form-control" placeholder="Contraseña" />
                </div>

                <div className="text-center">
                    <button type="button" className="btn btn-primary btn-block mb-4">Iniciar sesión</button>
                </div>

                <div className="text-center">
                    <p>¿No tiene cuenta? <a href="sing-in">Registrarse</a></p>
                    <a href="forgot-password">¿Olvidó su contraseña?</a>
                </div>
            </form>
        </div>
    );
}