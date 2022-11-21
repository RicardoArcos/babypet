import '../styles/nav-bar-bottom.css';
import logo from '../images/LogoSL.png';

export const FootBar = () => {
    return(
        <footer className="bd-footer py-4 py-md-5 mt-5 bg-light" id="footer">
            <div className="container py-4 py-md-5 px-4 px-md-3">
                <div className="row">
                    <div className="col-lg-3 mb-3">
                        <a className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/" aria-label="Babypet">
                            <div className="logo">
                                <img className="logo-img" src={logo} alt="Logo" />
                            </div>
                        </a>
                        <ul className="list-unstyled small text-muted">
                            <li className="mb-2">Hecho con todo el amor que tenemos por nuestras mascotas.</li>
                            <li className="mb-2">Furrsoft 2022</li>
                        </ul>
                    </div>
                    <div className="col order-last">
                        <ul className="navbar-nav sm-icons">
                            <li>
                                <a className="nav-link" href="/"><i class="bi bi-facebook"></i></a>
                            </li>
                            <li>
                                <a className="nav-link" href="https://www.instagram.com/_baby_pet_cdmx/"><i class="bi bi-instagram"></i></a>
                            </li>
                            <li className="mb-2">
                                <a href="/" id="acerca-de">Acerca de</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );

}