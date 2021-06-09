import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';


const Projets = () => {
    return (
        <main className="projets">
            <div className="projets_top">
                <h1>Projets</h1>
                <NavBar/>
            </div>

            <div className='slideshow'>
                <div className="each-slide">
                    <img src="./image/Maquette_TheResto.png" alt="The Resto"/>
                </div>
                <div className="each-slide">
                    <img src="./image/Regalia.png" alt="Regalia"/>
                    <div className="slide_text">
                        <h2>Projet Regalia</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, natus.</p>
                    </div>
                </div>
                <div className="each-slide">
                    <img src="./image/Boxe-League.png" alt="Boxe League" />
                </div>
            </div>
            <Link to="/" className="link_homepage">Home Page</Link>
        </main>
    )
}

export default Projets
