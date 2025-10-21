import {styles} from '../public/styles.css';
import { Link } from "react-router-dom";

function AlterarPerfil() {
    return (
        <div className="alterar-perfil-container">
            <h1 className={styles.alterarPerfil}>Alterar Perfil</h1>
            <img src="https://tse2.mm.bing.net/th/id/OIP.YSymTzvxsmfQo6R-im2YwAHaFj?pid=Api&P=0&h=180" alt="Imagem de Perfil" />
        <Link to="/alterarperfil">Ir para Alterar Perfil</Link>
        </div>
    )
}

export default AlterarPerfil;