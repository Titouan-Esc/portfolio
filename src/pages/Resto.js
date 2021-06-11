import { SliderData } from "../components/SliderData";
import SliderImage from "../components/SliderImage";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';



const Resto = () => {

    return (
        <main className="the_resto">
            <Link to='/projets'><AiOutlineArrowLeft className='return'/></Link>
            <h1>The Resto</h1>
            <div className="container">
                <div className="container_left">
                    <img src="./image/Maquette_TheResto.png" alt="The Resto" />
                    <p>Tout premier gros projet d'intégration durant ma période de formation. Il à était réalisé en 2 semaines pendant les vacances d'hiver. Responsive jusqu'à 320px. Utilisation simplement de HTML et CSS.</p>
                    <p className='p'>N'est pas hébergé</p>
                </div>
                <div className="container_right">
                        <SliderImage slides={SliderData} />
                </div>
            </div>
        </main>
    )
}

export default Resto
