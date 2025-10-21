import CadastrarMesa from "./CadastrarMesa";
import { Link } from "react-router-dom";

function ReservarMesa() {
    return (
        <div className="reservar-mesa-container">
            <h2>Reserve a sua mesa abaixo:</h2>
            <input type="date" name="dataReserva" id="data" />
            <label htmlFor="data">Data da Reserva</label>
            <input type="time" name="horaReserva" id="hora" />
            <label htmlFor="hora">Hora da Reserva</label>
            <input type="text" name="nomeCliente" id="nomeCliente" />
            <label htmlFor="nomeCliente">Nome do Cliente</label>
            <input type="tel" id="telefone" name="telefone"/>
            <label htmlFor="telefone">Telefone:</label>
            <select name="selectMesa" id="selectMesa">
            <option value="mesa1">Mesa 1</option>
            <option value="mesa2">Mesa 2</option>
            <option value="mesa3">Mesa 3</option>
            <option value="mesa4">Mesa 4</option>
            <option value="mesa5">Mesa 5</option>
            <option value="mesa5">Mesa 6</option>
            <option value="mesa5">Mesa 7</option>
            <option value="mesa5">Mesa 8</option>
            <option value="mesa5">Mesa 9</option>
            <option value="mesa5">Mesa 10</option>
            <option value="mesa5">Mesa 11</option>
            <option value="mesa5">Mesa 12</option>
            <option value="mesa5">Mesa 13</option>
            <option value="mesa5">Mesa 14</option>
            <option value="mesa5">Mesa 15</option>
            </select>
            <button>Reservar Mesa</button>
             <Link to="/reservar">Ir para Reservar Mesa</Link>
        </div>
        
    )
}

export default ReservarMesa;