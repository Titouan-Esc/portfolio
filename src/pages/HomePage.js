import NavBar from "../components/NavBar"
import { motion } from "framer-motion"

const HomePage = () => {
    return (
        <main className = "home_page">
            <div className="home_page_top">
                <h1>Titouan Escorneboueü</h1>
                <motion.div whileHover={{}}>
                    <div className="conteneur_dev_web">
                        <h2>Developpeur web / web mobile</h2>
                    </div>
                </motion.div>
            </div>
            <NavBar/>
        </main>
    )
}

export default HomePage
