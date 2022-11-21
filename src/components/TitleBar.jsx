import '../styles/navigation-bar.css';
import logo from '../images/logol.png';

export const TitleBar = () => {
    return(
        <nav>
            <div className="logo">
                <img className="logo-img" src={logo} alt="Logo" />
            </div>
            <div className="nav-items">
                <li><a href="/"></a>Inicio</li>
                <li><a href="/"></a>Categorias</li>
                <li><a href="/"></a>Acerca de</li>
                <li><a href="/"></a>Cuenta</li>
                <li><a href="/"></a>Carrito</li>
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
