import React, { Component, Fragment } from "react";
import ClientSideBar from "../../../components/ClientSideBar";
import ClientNav from "../../../components/ClientNav";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import Input from "../../../components/Input";
import Btn from "../../../components/Btn";
import "./styles.css";
import api, { ApiCep } from "../../../Config/api";
import constants from "../../../Config/constants";
import { Link } from "react-router-dom";
import QuemSomos from "../../../Assets/img/quemSomos.jpg";

export default class ClientIndique extends Component {
	constructor(props) {
		super(props);
		this.state = {
			total_respondido: "",
			promotores: "",
			neutro: "",
			detratores: "",
			comum: "",
			status: "",
			nps_respondido: true,
			nps: "",
			cupon_desconto: ""
		};
	}

	componentDidMount() {
		let clientecpf = localStorage.getItem("clientecpf");
		clientecpf = JSON.parse(clientecpf);

		this.setState({ cupon_desconto: clientecpf.cupon_desconto });
	}

	valorNota = (e) => {
		var nota = e.target.value;
		this.setState({
			nps: nota
		});
	};

	enviarNota = (e) => {
		e.preventDefault();
		if (this.state.nps != "") {
			api.post("/nps/recomendacao", { nota: this.state.nps }).then((response) => {
				this.setState({ nps_respondido: false });
			});
		}
	};

	render() {
		return (
			<Col className="organizando-indique" lg={10} md={12} sm={12} xs={12}>
				<h1 className="titulo-indique">Eu indico a Postex!</h1>
				<div className="card-indique col-md-12 mb-2">
					{this.state.nps_respondido ? (
						<Fragment>
							<img src={QuemSomos} alt="indique" className="imgIndique mb-4" />
							<h4 className="texto-nota">De 0 a 10, qual a chance de você recomendar a nossa empresa para um amigo ou colega?</h4>
							<ButtonGroup className="w-100 over-indique" aria-label="First group">
								<button value="0" onClick={this.valorNota} className="btn botao btn-0">
									0
								</button>
								<button value="1" onClick={this.valorNota} className="btn botao btn-1">
									1
								</button>
								<button value="2" onClick={this.valorNota} className="btn botao btn-2">
									2
								</button>
								<button value="3" onClick={this.valorNota} className="btn botao btn-3">
									3
								</button>
								<button value="4" onClick={this.valorNota} className="btn botao  btn-4">
									4
								</button>
								<button value="5" onClick={this.valorNota} className="btn botao  btn-5">
									5
								</button>
								<button value="6" onClick={this.valorNota} className="btn botao btn-6">
									6
								</button>
								<button value="7" onClick={this.valorNota} className="btn botao btn-7">
									7
								</button>
								<button value="8" onClick={this.valorNota} className="btn botao btn-8">
									8
								</button>
								<button value="9" onClick={this.valorNota} className="btn botao btn-9">
									9
								</button>
								<button value="10" onClick={this.valorNota} className="btn botao btn-10">
									10
								</button>
							</ButtonGroup>
							<button onClick={this.enviarNota} className="btn-orange mt-3">
								Enviar Nota
							</button>
						</Fragment>
					) : (
						<Ranking desconto={this.state.cupon_desconto} />
					)}
				</div>
			</Col>
		);
	}
}

class Ranking extends Component {
	constructor(props) {
		super(props);
		this.state = {
			_id: "",
			comum: "",
			total_respondido: "",
			promotores: "",
			neutro: "",
			detratores: "",
			nps: "",
			status: ""
		};
	}

	componentDidMount() {
		api.get("/nps/list").then((response) => {
			let nota = response.data.nps.nps;
			this.setState(response.data.nps);
			this.setState({ nps: nota.toFixed(2) });
		});
	}

	render() {
		return (
			<Fragment>
				<h4 className="texto-nota">Obrigado pela Avaliação!</h4>
				<ButtonGroup className="w-100  d-flex justify-content-center" aria-label="First group">
					<div className="table-responsive w-75  ">
						<table className="table table-hover mt-3">
							<thead></thead>
							<tbody className="text-center">
								<tr>
									<td>
										<h4 className=" w-100 font-weight-bold texto-nota">Nota da Postex</h4>
									</td>
									<td>
										<h4 className="font-weight-bold texto-nota">{this.state.nps}</h4>
									</td>
								</tr>
								<tr>
									<td>
										<h4 className=" w-100 font-weight-bold texto-nota">Onde estamos</h4>
									</td>
									<td>
										<h4 className="font-weight-bold texto-nota">{this.state.status}</h4>
									</td>
								</tr>
								<tr>
									<td>
										<span className="btn btn-10 w-100 font-weight-bold">Satisfeitos</span>
									</td>
									<td>
										<h4 className="font-weight-bold texto-nota">{this.state.promotores}</h4>
									</td>
								</tr>
								<tr>
									<td>
										<span className="btn btn-5 w-100 font-weight-bold">Imparciais</span>
									</td>
									<td>
										<h4 className="font-weight-bold texto-nota">{this.state.comum}</h4>
									</td>
								</tr>
								<tr>
									<td>
										<span className="btn btn-1 w-100 font-weight-bold">Insatisfeitos</span>
									</td>
									<td>
										<h4 className="font-weight-bold texto-nota">{this.state.detratores}</h4>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</ButtonGroup>
				<div className="altura-div d-flex flex-column justify-content-center align-items-center mt-3 mb-3 desconto">
					<span className="titulo-desconto">Seu cupom de desconto:</span>
					<span className="cod-desconto">{this.props.desconto}</span>
				</div>
			</Fragment>
		);
	}
}
