import styles from '../public/styles.css';

function Perfil() {
    return (
        <div className="perfil-container">
            <h1 className={styles.perfil}>Seja bem vindo </h1>
            <img src="https://tse2.mm.bing.net/th/id/OIP.YSymTzvxsmfQo6R-im2YwAHaFj?pid=Api&P=0&h=180" alt="Alterar Imagem de Perfil" />
        </div>
    )
}

export default Perfil;