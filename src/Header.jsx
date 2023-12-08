import './Header.css';

function Header() {
    return (
        <>
            <header>
                <div className='logo-title'>
                    <img src='https://www.zupimages.net/up/23/49/fenf.png' />
                    <h1>MAGASINNN</h1>
                </div>
                <ul>
                    <li>Accueil</li>
                    <li>Produits</li>
                </ul>
            </header>
        </>
    );
}

export default Header;