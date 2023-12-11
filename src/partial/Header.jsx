import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <>
            <header>
                <div className='logo-title'>
                    <img src='https://www.zupimages.net/up/23/49/fenf.png' alt='Ceci est un logo' />
                    <h1>MAGASINNN</h1>
                </div>
                <ul>
                    <li><Link to={"/"}>Accueil</Link></li>
                    <li><Link to={"/products"}>Produits</Link></li>
                    <li><Link to={"/cgv"}>CGV</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                </ul>
            </header>
        </>
    );
}

export default Header;