import React from "react";

import { BrowserRouter, Switch, Route} from "react-router-dom";

//paginas a serem navegadas
import Cotacao from "./pages/antigo/cotacao-antigo";
import Franqueado from "./pages/franqueado";
import Rastreamento from "./pages/rastreamento";
import Sac from "./pages/sac";
import Coleta from './pages/antigo/Coleta-antigo/index'
import Contato from './pages/antigo/Contato-antigo'
import PDF from './Assets/PDF'
import ClientRegister from './pages/Cliente/Register'
import ClientHome from './pages/Cliente/Home'
import ClientCalculadora from './pages/Cliente/CalculadoraDeFrete'
import Home from "./pages/Home";
import Area_cliente from "./pages/area_cliente";
import Area_restrita from "./pages/area_restrita";
import ClientRegisterCNPJ from './pages/Cliente/RegisterCNPJ'
import FranquiaRegisterCNPJ from './pages/Franquia/RegisterCNPJ'
import FranquiaRegister from './pages/Franquia/Register'


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Cotacao" component={Cotacao}/>
            <Route path="/Franqueado" component={Franqueado}/>
            <Route path="/Franquea/Cadastro" component={FranquiaRegister}/>
            <Route path="/Franquea/CNPJ/Cadastro" component={FranquiaRegisterCNPJ}/>
            <Route path="/Rastreamento" component={Rastreamento}/>
            <Route path="/Sac" component={Sac}/>
            <Route path="/Coleta" component={Coleta}/>
            <Route path="/Contato" component={Contato}/>
            <Route path="/PDF" component={PDF}/>
            <Route path="/Cliente/Cadastro" component={ClientRegister}/>
            <Route path="/Cliente/CNPJ/Cadastro" component={ClientRegisterCNPJ}/>
            <Route path="/Cliente/Home" component={ClientHome}/>
            <Route path="/Cliente" component={Area_cliente}/>
            <Route path="/Restrita" component={Area_restrita}/>
            <Route path="/Cliente/Calculadora" component={ClientCalculadora}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
