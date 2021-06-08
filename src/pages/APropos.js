import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const APropos = () => {
    return (
        <main className="a_propos">

            {/* H1 + navbar */}
            <div className="top">
                <h1>A propos</h1>
                <NavBar/>
            </div>

            {/* Liste des sous partie */}
            <div className="apropos_middle">
                <ul>
                    <li>Parcours de vie</li>
                    <li>Expérience professionnelle</li>
                    <li>Compétences</li>
                </ul>
            </div>

            <div className="container">
                <div className="scroll_horizontal">
                    {/* Premier text */}
                    <div className="apropos_text">
                        <h2>Parours de vie</h2>
                        <p className="subtitle">
                            Mais ou mon parcours à bien commencé ?
                        </p>
                        <p>
                            J'ai debute ma vie avec des etudes en Ebenisterie (qui est aux antipode du metier de developpeur web).
                        </p>
                        <p className="subtitle">
                            Pourquoi l'Ebénisterie ?
                        </p>
                        <p>
                            Cette question souleve plusieurs default, premierement sorti du college je n'avais pas reelement idee
                            de mon futur metiers. J'ai du me lancer dans un metiers qui ne me plaissait pas.
                        </p>
                        <p className="subtitle">
                            Pourquoi vous etes vous reconverti dans le developpement ?
                        </p>
                        <p>
                            Comme j'ai pu le dire au part avant, l'ebenisterie n'etait pas fait pour moi. J'avais deja pour projet
                            de changer de metier. Grace a un ami j'ai pu connaitre le developpement web et c'est la ou ma passion
                            pour le developpement web commenca, et depuis je ne cesse d'aimer de jour en jour mon travail.
                        </p>
                        <p className="subtitle">
                            Quel sont vos projets futur ?
                        </p>
                        <p>
                            Pour le futur, etant jeune je compte bien continuer au maximum dans les etudes, puis me specialiser
                            dans la cyber securite. Qui est mon plus but ultime dans ma vie professionnelle. Puis l'idee de partir
                            a l'etranger (Silicone Valley) pour y vivre a plein temps sous le soleil de la Californie.
                        </p>
                    </div>

                    {/* Second text */}
                    <div className="apropos_text">
                        <h2>Experience professionnelle</h2>
                        <p className="subtitle">
                            Vous avez donc avoir beaucoup d'experience avec l'ebenisterie ?
                        </p>
                        <p>
                            Alors oui, grace a mes nombreuses annees en tant qu'ebeniste, j'ai pu faire de nombreux mois en
                            entreprise.
                        </p>
                        <p className="subtitle">
                            Et qu'elles sont-elle ?
                        </p>
                        <p>
                            Pour la plus part du temps j'etait chez de petit ebeniste. Puis je suis passe chez de grosse
                            entreprise de bateaux de luxe, tel que Couach situee a Gujan-Mestras, puis CNB qui quand a elle
                            est a Bordeaux meme. 
                        </p>
                        <p className="subtitle">
                            Quelle etait leur duree ?
                        </p>
                        <p>
                            Pour mon CAP j'ai eu 2 periodes de 6 semaines. Pour ma mention complementaire 3 periodes de
                            6 semaines aussi. Tandis que pour mon BTM j'ai passe mes deux ans d'alternance dans la meme
                            entreprise qui etait CNB.
                        </p>
                        <p className="subtitle">
                            Que vous a apporte ces experiences professionnelle ?
                        </p>
                        <p>
                            Meme si cela parait un peu bateaux, toute mes experiences m'ont appris la rigueur, la patience,
                            la ponctualite et le sens du travail bien fait qui etait de mise pour la construction de bateaux
                            de luxe.
                        </p>
                    </div>

                    {/* Troisième text */}
                    <div className="apropos_text">
                        <div className="text_top">
                            <h2>Compétences</h2>
                            <p>
                                Liste non exhaustive de mes competences ainsi que de leur niveau :
                            </p>
                        </div>
                        <div className="img_competences">
                            <img src="./image/icons8-html-5.svg" alt="HTML" />
                            <img src="./image/icons8-css3.svg" alt="CSS" />
                            <img src="./image/icons8-javascript.svg" alt="JavaScript" />
                            <img src="./image/icons8-sass.svg" alt="SASS" />
                            <img src="./image/icons8-react-native.svg" alt="React" />
                            <img src="./image/icons8-nodejs.svg" alt="NodeJs" />
                            <img src="./image/icons8-firebase.svg" alt="Firebase" />
                            <img src="./image/icons8-mongodb.svg" alt="MongoDB" />
                            <img src="./image/icons8-jquery.svg" alt="JQuery" />
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/" className='link_homepage'>Home Page</Link>
        </main>
    )
}

export default APropos
