import { Link } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import NavBar from '../components/NavBar';

const propriete = {
    arrows: false,
}


const Projets = () => {
    return (
        <main className="projets">
            <div className="projets_top">
                <h1>Projets</h1>
                <NavBar/>
            </div>

            <Fade {...propriete} className='slideshow'>
                <div className="each-slide">
                    <img src="./image/Maquette_TheResto.png" alt="The Resto" />
                </div>
                <div className="each-slide">
                    <img src="./image/Regalia.png" alt="Regalia" />
                </div>
                <div className="each-slide">
                    <img src="" alt="" />
                </div>
                <div className="each-slide">
                    <img src="" alt="" />
                </div>
                <div className="each-slide">
                    <img src="" alt="" />
                </div>
            </Fade>
            <Link to="/" className="link_homepage">Home Page</Link>
        </main>
    )
}

export default Projets
