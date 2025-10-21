import ReservarMesa from "./ReservarMesa";
import {styles} from '../public/styles.css';
import { Link } from "react-router-dom";

function CadastrarMesa() {
    return (
        <div className="cadastrar-mesa-container">
            <input type="text" id="mesa"/>
            <label htmlFor="mesa">Número da Mesa</label>
            <input type="number" id="capacidade" name="capacidade" min={1} max={5}/>
            <label htmlFor="capacidade">Capacidade (min: 1, max: 5)</label>
            <input type="status" name="status" id="status" />
            <label htmlFor="status">Status</label>
            <button>Cadastrar Mesa</button>
            <Link to="/cadastrarm">Ir para Cadastrar Mesa</Link>
        </div>
    )
}

export default CadastrarMesa;