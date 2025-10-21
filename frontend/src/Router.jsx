import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../public/views/Home"; 

function Routes(){
    return(
<BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/CadastrarMesa" element={<CadastrarMesa/>}></Route>
    <Route path="/ReservarMesa" element={<ReservarMesa/>}></Route>
    <Route path="/Perfil" element={<Perfil/>}></Route>
    <Route path="/AlterarPerfil" element={<AlterarPerfil/>}></Route>
    </Routes>
</BrowserRouter>
    )
}
export default Routes
