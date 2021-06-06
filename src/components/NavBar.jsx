import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
            <Link to="/apropos">A Propos</Link>
            <Link to='/projets'>Projets</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default NavBar
