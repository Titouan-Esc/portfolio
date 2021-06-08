import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { jsPDF } from 'jspdf';
import Pdf from '../assets/image/CV Titouan Escorneboueu-1.png';


const Contact = () => {

    const pdfGenerator = () => {
        const doc = new jsPDF();
        doc.addImage(Pdf, 'PNG', 65, 20, 500, 400);
        doc.save('a.pdf')
    }


    return (
        <main className="contact">

            <div className="contact_top">
                <h1>Contact</h1>
                <NavBar/>
            </div>

            <div className="contact_text">
                <p>Via mail à <span>titouanescorneboueu@gmail.com</span></p>
                <p>Via téléphone au <span>06.51.76.06.25</span></p>
                <p>Et sur tout les autres réseaux possible</p>
            </div>
            
            <div className="reseaux_cv">
                <div className="reseaux">
                    <h2>Situé sur Bordeaux</h2>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <div className="cv">
                    <h2>Télécharger mon CV</h2>
                    <button onClick={() => pdfGenerator()}>Télécharger</button>
                </div>
            </div>
            <Link to="/" className="link_homepage">Home Page</Link>
        </main>
    )
}

export default Contact
