import React, { Component } from "react";
import Header from "../../components/Header";
import { Container, Form } from "react-bootstrap";
import "./styles.css";
import api from "../../Config/api";
import constants from "../../Config/constants";
import MaskedFormControl from "react-bootstrap-maskedinput";

export default class Area_restrita extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cpf: "",
			cnpj: "",
			usuario: "",
			password: "",
			tipo: "",
			logErr: null,
			logMen: null
		};
	}

	cpflogin = () => {
		api
			.post(constants.franquiacpflogin, { cpf: this.state.cpf, password: this.state.password })
			.then((response) => {
				console.log(response);
				localStorage.setItem("cliente", response.data.cliente);
				window.location.href = "/adm/Principal";
			})
			.catch((error) => {
				this.setState({
					logErr: true,
					logMen: error.response.data.error
				});
			});
	};

	cnpjlogin = () => {
		api
			.post(constants.franquiacpflogin, { cnpj: this.state.cnpj, password: this.state.password })
			.then((response) => {
				console.log(response);
				localStorage.setItem("cliente", response.data.cliente);
				window.location.href = "/adm/Principal";
			})
			.catch((error) => {
				this.setState({
					logErr: true,
					logMen: error.response.data.error
				});
			});
	};

	usuariologin = () => {
		api
			.post(constants.franquiacpflogin, { usuario: this.state.usuario, password: this.state.password })
			.then((response) => {
				console.log(response);
				localStorage.setItem("cliente", response.data.cliente);
				window.location.href = "/adm/Principal";
			})
			.catch((error) => {
				this.setState({
					logErr: true,
					logMen: error.response.data.error
				});
			});
	};

	// cpfesqueci = () => {
	// 	api
	// 		.post(constants.clientecpfsenha, { cpf: this.state.cpf })
	// 		.then((response) => {
	// 			console.log(response);
	// 		})
	// 		.catch((error) => {
	// 			this.setState({
	// 				logErr: true,
	// 				logMen: error.response.data.error
	// 			});
	// 		});
	// };

	// cnpjesqueci = () => {
	// 	api
	// 		.post(constants.clientecnpjsenha, { cnpj: this.state.cpf })
	// 		.then((response) => {
	// 			this.setState({
	// 				logErr: true,
	// 				logMen: response.response.data.error
	// 			});
	// 		})
	// 		.catch((error) => {
	// 			this.setState({
	// 				logErr: true,
	// 				logMen: error.response.data.error
	// 			});
	// 		});
	// };

	// usuarioesqueci = () => {
	// 	api
	// 		.post(constants.clientecpfsenha, { usuario: this.state.usuario })
	// 		.then((response) => {
	// 			console.log(response);
	// 		})
	// 		.catch((error) => {
	// 			this.setState({
	// 				logErr: true,
	// 				logMen: error.response.data.error
	// 			});
	// 		});
	// };

	render() {
		const tipo = this.state.tipo;
		let fada;

		if (tipo == "CPF") {
			fada = (
				<Form className="logar">
					<div className="center flex-column mt-4" md={6} sm={12}>
						<MaskedFormControl mask="111.111.111-11" onChange={(val) => this.setState({ cpf: val.target.value })} className="inputFran" type="text" placeholder="Digite o CPF" />
						<Form.Control onChange={(val) => this.setState({ password: val.target.value })} className="inputFran" type="password" placeholder="Digite a senha" />
					</div>
					<div className="center flex-column mt-4" md={6} sm={12}>
						<Form.Label className="texto1" onClick={this.cpfesqueci}>
							Esqueci a senha
						</Form.Label>
						<a href="/" alt="Contato" onClick={this.cpflogin} className="btnSac3">
							Entrar
						</a>
					</div>
				</Form>
			);
		}

		if (tipo == "CNPJ") {
			fada = (
				<Form className="logar">
					<div className="center flex-column mt-4" md={6} sm={12}>
						<MaskedFormControl mask="11.111.111/1111-11" onChange={(val) => this.setState({ cnpj: val.target.value })} className="inputFran" type="text" placeholder="Digite o CNPJ" />
						<Form.Control onChange={(val) => this.setState({ password: val.target.value })} className="inputFran" type="password" placeholder="Digite a senha" />
					</div>
					<div className="center flex-column mt-4" md={6} sm={12}>
						<Form.Label className="texto1" onClick={this.cpfesqueci}>
							Esqueci a senha
						</Form.Label>
						<a href="/" alt="Contato" onClick={this.cnpjlogin} className="btnSac3">
							Entrar
						</a>
					</div>
				</Form>
			);
		}

		if (tipo == "Usuário") {
			fada = (
				<Form className="logar">
					<div className="center flex-column mt-4" md={6} sm={12}>
						<Form.Control onChange={(val) => this.setState({ usuario: val.target.value })} className="inputFran" type="text" placeholder="Digite o usuário" />
						<Form.Control onChange={(val) => this.setState({ password: val.target.value })} className="inputFran" type="password" placeholder="Digite a senha" />
					</div>
					<div className="center flex-column mt-4" md={6} sm={12}>
						<Form.Label className="texto1" onClick={this.cpfesqueci}>
							Esqueci a senha
						</Form.Label>
						<a href="/" alt="Contato" onClick={this.usuariologin} className="btnSac3">
							Entrar
						</a>
					</div>
				</Form>
			);
		}

		return (
			<div className="bodyRestrita">
				<Header ative="Restrita" />
				<Container className="cont">
					<h2 className="Franquia">Área Restrita</h2>

					<div className="mgTop20Meio col-lg-6 div-principal">
						<p className="tituloTXT">Acesso a Franqueado e Administradores</p>
						<div className="topo">
							<Form className="logar">
								<div className="d-flex flex-column w-100" md={8} sm={12}>
									<Form.Label className="texto">Fazer Login</Form.Label>
									<Form.Label className="forma-acesso">Escolha a Forma de Acesso</Form.Label>
									<Form.Control className="inputFran input-select" as="select" onChange={(val) => this.setState({ tipo: val.target.value })}>
										<option></option>
										<option>CPF</option>
										<option>CNPJ</option>
										<option>Usuário</option>
									</Form.Control>
									{fada}
									<p></p>
									{this.state.logErr ? <p className="subTitle2">{this.state.logMen}</p> : null}
								</div>
							</Form>
						</div>
					</div>
				</Container>
			</div>
		);
	}
}
