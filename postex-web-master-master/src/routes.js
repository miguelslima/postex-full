import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// Site externo
import Cotacao from "./pages/antigo/cotacao-antigo";
import Franqueado from "./pages/franqueado";
import Rastreamento from "./pages/rastreamento";
import Sac from "./pages/sac";
import Coleta from "./pages/antigo/Coleta-antigo/index";
import Contato from "./pages/antigo/Contato-antigo";
import PDF from "./Assets/PDF";
import Home from "./pages/Home";
import Area_cliente from "./pages/area_cliente";
import Area_restrita from "./pages/area_restrita";
import ClientRegisterCNPJ from "./pages/Cliente/RegisterCNPJ";
import FranquiaRegisterCNPJ from "./pages/Franquia/RegisterCNPJ";
import FranquiaRegister from "./pages/Franquia/Register";
import ClientRegister from "./pages/Cliente/Register";

// Area do Cliente
import ClientPrincipal from "./pages/Cliente/Principal/principal";
import ClientHome from "./pages/Cliente/Home";
import ClientIndique from "./pages/Cliente/Indique";
import ClientCalculadora from "./pages/Cliente/CalculadoraDeFrete";
import ClientCarteira from "./pages/Cliente/Carteira";
import ClientEnvios from "./pages/Cliente/MeusEnvios";
import ClientAgendarEnvios from "./pages/Cliente/AgendarEnvio";
import ClientPerfil from "./pages/Cliente/Perfil";

// Area restrita
import AdmPrincipal from "./pages/ADM/Principal";

// Falta Restrita/home

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/Cotacao" component={Cotacao} />
			<Route path="/Sac" component={Sac} />
			<Route path="/Franqueado" component={Franqueado} />
			<Route path="/Franquea/Cadastro" component={FranquiaRegister} />
			<Route path="/Franquea/CNPJ/Cadastro" component={FranquiaRegisterCNPJ} />
			<Route path="/Rastreamento" component={Rastreamento} />
			<Route path="/Coleta" component={Coleta} />
			<Route path="/Contato" component={Contato} />
			<Route path="/PDF" component={PDF} />
			<Route path="/Cliente/Cadastro" component={ClientRegister} />
			<Route path="/Cliente/CNPJ/Cadastro" component={ClientRegisterCNPJ} />
			<Route path="/Restrita" component={Area_restrita} />
			<Route exact path="/Cliente" component={Area_cliente} />
			<Route path="/Cliente/Principal" component={ClientPrincipal} />
			<Route path="/Adm/Principal" component={AdmPrincipal} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
