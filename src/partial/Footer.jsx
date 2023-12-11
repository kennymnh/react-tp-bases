import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer>
                &copy; 2023 Mon super site
                <a href='#'>Mentions légales</a>
                <Link to={"/cgv"}>CGV</Link>
                <a href='#'>Sitemap</a>
            </footer>
        </>
    );
}

export default Footer;