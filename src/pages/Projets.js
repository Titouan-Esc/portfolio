import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { useHistory } from 'react-router-dom';



const Projets = () => {

    let history = useHistory();

    const redirect1 = () => {
        history.push('/regalia');
    }

    const redirect2 = () => {
        history.push('/resto');
    }

    const redirect3 = () => {
        history.push('/boxeleague');
    }


    return (
        <main className="projets">
            <div className="projets_top">
                <h1>Projets</h1>
                <NavBar/>
            </div>

            <div className='slideshow'>
                <div className="each-slide">
                    <img src="./image/Maquette_TheResto.png" alt="The Resto" onClick={redirect2}/>
                </div>
                <div className="each-slide">
                    <img src="./image/Regalia.png" alt="Regalia" onClick={redirect1}/>
                </div>
                <div className="each-slide">
                    <img src="./image/Boxe-League.png" alt="Boxe League" onClick={redirect3}/>
                </div>
            </div>
            <Link to="/" className="link_homepage">Home Page</Link>
        </main>
    )
}

export default Projets
