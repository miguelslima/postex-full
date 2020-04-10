import React, { Component } from "react";
import Header from "../../components/Header";
import { Container, Form, FormGroup } from "react-bootstrap";
import "./styles.css";
import api from "../../Config/api";
import constants from "../../Config/constants";
import MaskedFormControl from "react-bootstrap-maskedinput";

export default class Area_cliente extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cpf: "",
			cnpj: "",
			password: "",
			tipo: "",
			logErr: null,
			logMen: null
		};
	}

	cpflogin = (e) => {
		e.preventDefault();
		api
			.post(constants.clientecpf, { cpf: this.state.cpf, password: this.state.password })
			.then((response) => {
				localStorage.setItem("clientecpf", JSON.stringify(response.data.cliente));
				localStorage.setItem("token", response.data.token);
				if (response.data.token) {
					// Falta criar a pagina interna de ADM
					window.location.href = "/Cliente/Principal/Home";
				}
			})
			.catch((error) => {
				this.setState({
					logErr: true,
					logMen: error.response.data.error
				});
			});
	};

	cnpjlogin = (e) => {
		e.preventDefault();
		api
			.post(constants.clientecnpj, { cnpj: this.state.cnpj, password: this.state.password })
			.then((response) => {
				localStorage.setItem("clientecnpj", JSON.stringify(response.data.cliente));
				localStorage.setItem("token", response.data.token);
				if (response.data.token) {
					// Falta criar a pagina interna de ADM
					window.location.href = "/Cliente/Principal/Home";
				}
			})
			.catch((error) => {
				this.setState({
					logErr: true
					// logMen: error.response.data.error
				});
			});
	};

	cpfesqueci = () => {
		api
			.post(constants.clientecpfsenha, { cpf: this.state.cpf })
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				this.setState({
					logErr: true
					// logMen: error.response.data.error
				});
			});
	};

	cnpjesqueci = () => {
		api
			.post(constants.clientecnpjsenha, { cnpj: this.state.cnpj })
			.then((response) => {
				this.setState({
					logErr: true
					// logMen: response.response.data.error
				});
			})
			.catch((error) => {
				this.setState({
					logErr: true
					// logMen: error.response.data.error
				});
			});
	};

	render() {
		const tipo = this.state.tipo;
		let fada;

		if (tipo == "CPF") {
			fada = (
				<Form>
					<div className="center d-flex flex-column">
						<MaskedFormControl mask="111.111.111-11" onChange={(val) => this.setState({ cpf: val.target.value })} className="input1" type="text" placeholder="Digite o CPF" />
						<Form.Control onChange={(val) => this.setState({ password: val.target.value })} className="input2" type="password" placeholder="Digite a senha" />
						<Form.Label className="conteudo esqueci-senha" onClick={this.cpfesqueci}>
							Esqueci a senha
						</Form.Label>
						<a href="#" alt="Contato" onClick={this.cpflogin} className="btnSac2">
							Entrar
						</a>
					</div>
				</Form>
			);
		}
		if (tipo == "CNPJ") {
			fada = (
				<Form>
					<div className="center d-flex flex-column">
						<MaskedFormControl mask="11.111.111/1111-11" onChange={(val) => this.setState({ cnpj: val.target.value })} className="input1" type="text" placeholder="Digite o CNPJ" />
						<Form.Control onChange={(val) => this.setState({ password: val.target.value })} className="input2" type="password" placeholder="Digite a senha" />
						<Form.Label className="conteudo esqueci-senha" onClick={this.cnpjesqueci}>
							Esqueci a senha
						</Form.Label>
						<a href="#" alt="Contato" onClick={this.cnpjlogin} className="btnSac2">
							Entrar
						</a>
					</div>
				</Form>
			);
		}
		return (
			<div className="bodyCliente">
				<Header ative="Cliente" />
				<Container className="cont">
					<h2 className="Franquia">Área do Cliente</h2>
					<div className="dividir col-lg-6">
						{/*logar*/}
						<div className="divlogin">
							<p id="contato-franquia" className="conteudo titulo-conteudo">
								Entre em sua conta para aproveitar nossas vantagens
							</p>
							<p id="contato-franquia" className="titulologin">
								Fazer Login
							</p>
							<Form>
								<div className="center opcoes d-flex flex-column">
									<Form.Label className="conteudo forma-acesso">Escolha a Forma de Acesso</Form.Label>
									<Form.Control as="select" className="input3" onChange={(val) => this.setState({ tipo: val.target.value })}>
										<option></option>
										<option>CPF</option>
										<option>CNPJ</option>
									</Form.Control>
								</div>
							</Form>
							{fada}
							<p></p>
							{this.state.logErr ? <p className="subTitle2">{this.state.logMen}</p> : null}
						</div>

						<div className="divcadastrar ">
							<p id="contato-franquia" className="cadastrou">
								Ainda não se cadastrou?
							</p>
							<div className="d-flex flex-column flex-md-row justify-content-around  mb-4 controle-cadastros">
								<div className="mgTop20Meio">
									<a href="/Cliente/Cadastro" alt="Contato" className="btnSac1">
										Cadastro Físico
									</a>
								</div>
								<div className="mgTop20Meio">
									<a href="/Cliente/CNPJ/Cadastro" alt="Contato" className="btnSac1">
										Cadastro Jurídico
									</a>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
		);
	}
}
