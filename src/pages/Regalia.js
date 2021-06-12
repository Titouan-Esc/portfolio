import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import RegaliaSlide from '../components/RegaliaSlide'
import { RegaliaData } from '../components/RegaliaData';

const Regalia = () => {
    return (
        <main className='project'>
            <Link to='/projets'><AiOutlineArrowLeft className='return'/></Link>
            <h1>Regalia</h1>
            <div className="container">
                <div className="container_left">
                    <img src="./image/Regalia.png" alt="Regalia" />
                    <p>Mon premier projet après la fin de mon Bac +2. Ce site était pour un étudiant et lui à servit de projet final pour son examen. Il n'y avais pas le site mais celui-ci était un complément et une continuation qui allait de paire avec l'ensemble de ses projets.</p>
                    <p className="p">Site non hébergé</p>
                </div>
                <div className="container_right">
                    <RegaliaSlide slides={RegaliaData}/>
                </div>
            </div>
        </main>
    )
}

export default Regalia
