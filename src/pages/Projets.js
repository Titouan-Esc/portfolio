import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';



const Projets = () => {

    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);
    const [showText4, setShowText4] = useState(false);

    let history = useHistory();

    const redirect1 = () => {
        history.push('/regalia');
    }


    return (
        <main className="projets">
            <div className="projets_top">
                <h1>Projets</h1>
                <NavBar/>
            </div>

            <div className='slideshow'>
                <div className="each-slide" onMouseEnter={() => setShowText1(true)} onMouseLeave={() => setShowText1(false)}>
                    <img src="./image/Maquette_TheResto.png" alt="The Resto"/>
                </div>
                <div className="each-slide" onMouseEnter={() => setShowText2(true)} onMouseLeave={() => setShowText2(false)}>
                    <img src="./image/Regalia.png" alt="Regalia" onClick={redirect1}/>
                    {showText2 && (
                        <div className="slide_text">
                            <h2>Projet Regalia</h2>
                            <p>Mon tout premier réel client après mon Bac+2</p>
                        </div>
                    )}
                </div>
                <div className="each-slide" onMouseEnter={() => setShowText3(true)} onMouseLeave={() => setShowText3(false)}>
                    <img src="./image/Boxe-League.png" alt="Boxe League" />
                </div>
                <div className="each-slide" onMouseEnter={() => setShowText4(true)} onMouseLeave={() => setShowText4(false)}>
                    <img src="" alt="" />
                </div>
            </div>
            <Link to="/" className="link_homepage">Home Page</Link>
        </main>
    )
}

export default Projets
