import { RestoData } from "../components/RestoData";
import RestoSlide from "../components/RestoSlide";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';



const Resto = () => {

    return (
        <main className="project">
            <Link to='/projets'><AiOutlineArrowLeft className='return'/></Link>
            <h1>The Resto</h1>
            <div className="container">
                <div className="container_left">
                    <img src="./image/Maquette_TheResto.png" alt="The Resto" />
                    <p>Tout premier gros projet d'intégration durant ma période de formation. Il à était réalisé en 2 semaines pendant les vacances d'hiver. Responsive jusqu'à 320px. Utilisation simplement de HTML et CSS.</p>
                    <p className='p'>N'est pas hébergé</p>
                </div>
                <div className="container_right">
                        <RestoSlide slides={RestoData} />
                </div>
            </div>
        </main>
    )
}

export default Resto
