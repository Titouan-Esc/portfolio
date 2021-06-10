import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Resto = () => {
    return (
        <main className="the_resto">
            <h1>The Resto</h1>
            <div className="container">
                <div className="container_left">
                    <img src="./image/Maquette_TheResto.png" alt="The Resto" />
                    <p>Tout premier gros projet d'intégration durant ma période de formation. Il à était réalisé en 2 semaines pendant les vacances d'hiver. Responsive jusqu'à 320px. Utilisation simplement de HTML et CSS.</p>
                    <p>N'est pas hébergé</p>
                </div>
                <div className="container_right">
                    <Carousel>
                        <div className="each-slide">
                            <img src="./image/Maquette_TheResto2.png" alt="The Resto2" />
                        </div>
                        <div className="each-slide">
                            <img src="./image/Maquette_TheResto3.png" alt="The Resto3" />
                        </div>
                        <div className="each-slide">
                            <img src="./image/Maquette_TheResto4.png" alt="The Resto4" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </main>
    )
}

export default Resto
