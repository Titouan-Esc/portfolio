import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
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

            <Slide {...propriete}>
                <div className="each-slide">
                    <img src="" alt="" />
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
                <div className="each-slide">
                    <img src="" alt="" />
                </div>
            </Slide>
            <Link to="/" className="link_homepage">Home Page</Link>
        </main>
    )
}

export default Projets
