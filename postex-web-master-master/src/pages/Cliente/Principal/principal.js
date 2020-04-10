import React, { Component } from "react";
import ClientNav from "../../../components/ClientNav";
import ClientSideBar from "../../../components/ClientSideBar";
import { Container, Form, Row, Col, Tabs, Tab } from "react-bootstrap";
import Input from "../../../components/Input";
import Btn from "../../../components/Btn";
import api from "../../../Config/api";

import ClientHome from "../Home";
import ClientIndique from "../Indique";
import ClientCalculadora from "../CalculadoraDeFrete";
import ClientCarteira from "../Carteira";
import ClientEnvios from "../MeusEnvios";
import ClientAgendarEnvios from "../AgendarEnvio";
import ClientPerfil from "../Perfil";
import { Route, Router, Switch } from "react-router-dom";

export default class ClientPrincipal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: "home"
		};
	}

	componentWillMount() {
		let clientecpf = localStorage.getItem("clientecpf");
		clientecpf = JSON.parse(clientecpf);
		let clientecnpj = localStorage.getItem("clientecnpj");
		clientecnpj = JSON.parse(clientecnpj);
		console.log(clientecpf);
		console.log(clientecnpj);
		console.log(localStorage.getItem("token"));
	}

	render() {
		return (
			<div className="home">
				<ClientNav />
				<Row className="m-0">
					<Col md={1} sm={1} xs={1}>
						<ClientSideBar ative={this.state.status} />
					</Col>
					<Switch>
						<Route path="/Cliente/Principal/Home" component={ClientHome} />
						<Route path="/Cliente/Principal/Indique" component={ClientIndique} />
						<Route path="/Cliente/Principal/Calculadora" component={ClientCalculadora} />
						<Route path="/Cliente/Principal/Carteira" component={ClientCarteira} />
						<Route path="/Cliente/Principal/Envios" component={ClientEnvios} />
						<Route path="/Cliente/Principal/AgendarEnvios" component={ClientAgendarEnvios} />
						<Route path="/Cliente/Principal/Perfil" component={ClientPerfil} />
					</Switch>
				</Row>
			</div>
		);
	}
}
