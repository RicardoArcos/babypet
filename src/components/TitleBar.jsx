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
                <li><a href="/">Acerca de</a></li>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Carrito</a></li>
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
