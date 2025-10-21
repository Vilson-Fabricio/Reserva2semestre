import styles from '../public/styles.css';
import { Link } from "react-router-dom";

function Perfil() {
    return (
        <div className="perfil-container">
            <h1 className={styles.perfil}>Seja bem vindo </h1>
            <img src="https://tse2.mm.bing.net/th/id/OIP.YSymTzvxsmfQo6R-im2YwAHaFj?pid=Api&P=0&h=180" alt="Alterar Imagem de Perfil" />
        <Link to="/perfil">Ir para Perfil</Link>
        </div>
    )
}

export default Perfil;