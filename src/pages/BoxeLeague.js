import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import BoxeLeagueSlide from '../components/BoxeLeagueSlide'
import { BoxeLeagueData } from '../components/BoxeLeagueData';

const BoxeLeague = () => {
    return (
        <main className='boxe_league'>
            <Link to='/projets'><AiOutlineArrowLeft className='return'/></Link>
            <h1>Boxe League</h1>
            <div className="container">
                <div className="container_left">
                    <img src="./image/Boxe-League.png" alt="Regalia" />
                    <div className='conteneur_text'>
                        <p>Projet final de mon examen. Le but de ce site était avant tout d'intégrer un système de création de combattant qui par la suite pouvais se battre entre eux en prenant en compte leurs statistiques qui était défini par l'utilisateur lors de la création du combattant.</p>
                        <p className="p">Site non hébergé</p>
                    </div>
                </div>
                <div className="container_right">
                    <BoxeLeagueSlide slides={BoxeLeagueData}/>
                </div>
            </div>
        </main>
    )
}

export default BoxeLeague
