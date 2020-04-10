import React, { Component, Fragment } from "react";
import Header from "../../components/Header";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./styles.css";
import api from "../../Config/api";
import constants from "../../Config/constants";

//falta tratar a saida de dados(status)

export default class Rastreamento extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tipo: "",
			codigo: "",
			nota_fiscal: "",
			cpf: "",
			cnpj: "",
			pedido: "",
			logErr: null,
			logMen: null,
			atualizacao: []
		};
	}

	suspenderEntregaNota = () => {
		api
			.post("/rastreamento/suspender", { codigo: this.state.nota_fiscal })
			.then((response) => {
				console.log(response);
				alert("Envio Suspenso com Sucesso!");
			})
			.catch((error) => {
				this.setState({
					logErr: true,
					logMen: error.response.data.error
				});
			});
	};
	// RJ82970005BR
	suspenderEntregaRastreio = () => {
		api
			.post("/rastreamento/suspender", { codigo: this.state.codigo })
			.then((response) => {
				console.log(response);
				alert("Envio Suspenso com Sucesso!");
			})
			.catch((error) => {
				this.setState({
					logErr: true,
					logMen: error.response.data.error
				});
			});
	};
	codigorastrear = () => {
		api
			.get(constants.rastreio + "codigo=" + this.state.codigo)
			.then((response) => {
				this.setState({
					atualizacao: response.data.rastreamento.atualizacao
				});
			})
			.catch((error) => {
				this.setState({
					logErr: true,
					logMen: error.response.data.error
				});
			});
	};
	notarastrear = () => {
		api
			.get(constants.rastreio + "nota_fiscal=" + this.state.nota_fiscal)
			.then((response) => {
				this.setState({
					atualizacao: response.data.rastreamento.atualizacao
				});
			})
			.catch((error) => {
				this.setState({
					logErr: true,
					logMen: error.response.data.error
				});
			});
	};
	render() {
		const tipo = this.state.tipo;

		let fada;
		let corpoTabela;

		corpoTabela = (
			<tbody>
				{this.state.atualizacao.map((atualiza) => (
					<tr key={atualiza._id}>
						<td>{atualiza.data}</td>
						<td>{atualiza.hora}</td>
						<td>{atualiza.local}</td>
						<td>{atualiza.uf}</td>
						<td>{atualiza.status}</td>
					</tr>
				))}
			</tbody>
		);

		if (tipo == "Código de Rastreio") {
			fada = (
				<Form>
					<Row className="inputRas d-flex justify-content-center col-sm-12">
						<Form.Control onChange={(val) => this.setState({ codigo: val.target.value })} className="bgB2 col-md-6 col-12" placeholder="Digite o código de rastreio" />
					</Row>
					<div className="table-responsive">
						<table className="table table-hover mt-3">
							<thead>
								<tr>
									<th scope="col">Data</th>
									<th scope="col">Hora</th>
									<th scope="col">Local</th>
									<th scope="col">Cidade</th>
									<th scope="col">Status</th>
								</tr>
							</thead>
							{corpoTabela}
						</table>
					</div>

					<Row className="mgTop20">
						<Col className="d-flex justify-content-around flex-column flex-md-row align-items-center" md={12} sm={12}>
							<a className="btnRas" onClick={this.codigorastrear} href="#">
								Rastrear
							</a>
							<a className="btnSuspender btn-danger" onClick={this.suspenderEntregaRastreio} href="#">
								Suspender Entrega
							</a>
						</Col>
					</Row>
				</Form>
			);
		}

		if (tipo == "Nota Fiscal") {
			fada = (
				<Form>
					<div className="inputRas d-flex justify-content-center col-sm-12">
						<Form.Control onChange={(val) => this.setState({ nota_fiscal: val.target.value })} className="bgB2 col-md-6 col-12" placeholder="Digite a nota fiscal" />
					</div>

					<div className="table-responsive">
						<table className="table table-hover mt-3">
							<thead>
								<tr>
									<th scope="col">Data</th>
									<th scope="col">Hora</th>
									<th scope="col">Local</th>
									<th scope="col">Cidade</th>
									<th scope="col">Status</th>
								</tr>
							</thead>
							{corpoTabela}
						</table>
					</div>

					<Row className="mgTop20">
						<Col className="d-flex justify-content-around flex-column flex-md-row align-items-center" md={12} sm={12}>
							<a className="btnRas" onClick={this.notarastrear} href="#">
								Rastrear
							</a>
							<a className="btnSuspender btn-danger" onClick={this.suspenderEntrega} href="#">
								Suspender Entrega
							</a>
						</Col>
					</Row>
				</Form>
			);
		}

		return (
			<div className="bodyRas">
				<Header ative="Rastreamento" />
				<Container className="cont">
					<h2 className="Rastreamento">Rastreamento</h2>

					<div className="divRas">
						<h3 className="titulo-envio">Acompanhe seu envio!</h3>
						<p className="subtitulo-envio">Selecione o método para rastrear:</p>
						<p></p>
						<Form.Group as={Col} controlId="formGridState" className="d-flex justify-content-center p-0">
							<Form.Control as="select" className="bgB col-md-6" onChange={(val) => this.setState({ tipo: val.target.value })}>
								<option></option>
								<option>Código de Rastreio</option>
								<option>Nota Fiscal</option>
							</Form.Control>
						</Form.Group>
						{fada}
						<p></p>
						{this.state.logErr ? <p className="subTitle">{this.state.logMen}</p> : null}
					</div>
				</Container>
			</div>
		);
	}
}
