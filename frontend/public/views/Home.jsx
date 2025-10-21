import styles from '../public/styles.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="perfil-container">
            <h1 className={styles.perfil}>Seja bem vindo a Sambariland Restaurante e Doces</h1>
            <img src="https://tse2.mm.bing.net/th/id/OIP.YSymTzvxsmfQo6R-im2YwAHaFj?pid=Api&P=0&h=180" alt="Alterar Imagem de Perfil" />
        <Link to="/Home">Ir para Home</Link>
        </div>
    )
}

export default Home;