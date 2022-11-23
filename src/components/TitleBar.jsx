import '../styles/navigation-bar.css';
import logo from '../images/logol.png';

export const TitleBar = () => {
    return(
        <nav>
            <div className="logo">
                <img className="logo-img" src={logo} alt="Logo" />
            </div>
            <div className="nav-items">
                <li><a href="/">Inicio</a></li>
                <li><a href="categorias">Categorias</a></li>
                <li><a href="about-us">Acerca de</a></li>
                <li><a href="/">Cuenta</a>
                    <ul className="sub-menu">
                        <li>Iniciar sesión</li>
                        <li>Crear cuenta</li>    
                    </ul>
                </li>
                <li>
                    <a href="shopping-car">Carrito 
                        <i className="bi bi-cart4">
                        </i>
                    </a>
                </li>
            </div>
            <div className="searchbar">
                <form>
                    <input type="text" placeholder="Busque articulos aquí" />
                    <button type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    );
}
