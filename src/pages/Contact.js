import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { jsPDF } from 'jspdf';
import Pdf from '../assets/image/Titouan Escorneboueü (1)-1.png';
import React, { useState } from 'react';




const Contact = () => {

    const [text, setText] = useState('');

    const pdfGenerator = () => {
        const doc = new jsPDF();
        doc.addImage(Pdf, 'PNG', 5, 0, 200, 300);
        doc.save('CV.pdf')
    }

    return (
        <main className="contact">

            <div className="contact_top">
                <h1>Me contacter</h1>
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
                    <div className="reseaux_logo">
                        <a href="https://github.com/Titouan-Esc?tab=repositories"><img src="./image/github.svg" alt="GitHub" /></a>
                        <a href="https://www.linkedin.com/in/titouan-escorneboueu/"><img src="./image/linkedin.svg" alt="LinKedin" /></a>
                        <a href="https://www.instagram.com/don_oscar_anton/"><img src="./image/logo-instagram.svg" alt="Instagram" /></a>
                        <a href="https://www.facebook.com/profile.php?id=100007820807943"><img src="./image/facebook.svg" alt="Facebook" /></a>
                    </div>
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
