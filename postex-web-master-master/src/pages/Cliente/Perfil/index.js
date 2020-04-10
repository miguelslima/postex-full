import React, { Component, Fragment } from "react";
import ClientSideBar from "../../../components/ClientSideBar";
import ClientNav from "../../../components/ClientNav";
import { Container, Row, Col, Button } from "react-bootstrap";
import Input from "../../../components/Input";
import Btn from "../../../components/Btn";
import "./styles.css";
import api, { ApiCep } from "../../../Config/api";
import constants from "../../../Config/constants";
import Notifications, { notify } from "react-notify-toast";

export default class ClientPerfil extends Component {
	constructor(props) {
		super(props);
		this.state = {
			focus: false,
			Form1: {
				name: "",
				produto: "",
				cpf: "",
				ddd: "",
				telefone: "",
				// email: null,
				// emailconf: null,
				// emailerr: null,
				cep: "",
				estado: "",
				cidade: "",
				endereco: "",
				numero: "",
				bairro: "",
				complemento: ""
			},
			logErr: null,
			logMen: null,
			disabled: true
		};
	}
	set = (state, val) => {
		var list = this.state.Form1;
		if (state === "cep" && val.length === 8) {
			const cep = val;
			const CepCoords = require("coordenadas-do-cep");
			CepCoords.setOpcoes({
				precisao: 6
			});
			CepCoords.getByCep(cep, (err, info) => {
				list["cep"] = cep;
				list["endereco"] = info.logradouro;
				list["bairro"] = info.bairro;
				list["cidade"] = info.localidade;
				list["estado"] = info.uf;
				list["complemento"] = info.complemento;
				this.setState({
					Form1: list
				});
			});
		} else {
			list[state] = val;
			this.setState({
				Form1: list
			});
		}
	};

	componentDidMount() {
		let clientecpf = localStorage.getItem("clientecpf");
		clientecpf = JSON.parse(clientecpf);

		let clientecnpj = localStorage.getItem("clientecnpj");
		clientecnpj = JSON.parse(clientecnpj);

		if(clientecpf == ''){
			this.setState({
				Form1: clientecnpj
			});
		}else {
			this.setState({
				Form1: clientecpf
			});
		}
	
		setTimeout(() => {
			console.log(this.state.Form1);
		}, 1000);
	}

	salvarEdicaoCpf = () => {
		api.post("/cpf/update", this.state.Form1).then((response) => {
			this.setState({ Form1: response.data, disabled: true });
			notify.show("PERFIL SALVO COM SUCESSO!", "success", 5000, "");
		});
	};
	salvarEdicaoCnpj = () => {
		api.post("/cnpj/update", this.state.Form1).then((response) => {
			this.setState({ Form1: response.data, disabled: true });
			notify.show("PERFIL SALVO COM SUCESSO!", "success", 5000, "");
		});
	};

	liberarEdicao = (e) => {
		e.preventDefault();
		this.setState({ disabled: false });
	};
	render() {
		return (
			<Col className="organizando-perfil" lg={10} md={12} sm={12} xs={12}>
				<Notifications options={{ zIndex: 99999, top: "50px" }} />
				<h1 className="titulo-perfil">Editar Perfil</h1>
				<div className="card-inputs">
					<div className="contForm col-md-10 mb-2">
						{/* <div className={this.state.etapa === "dadospessoais" ? "dpMeioConfig" : "dpEsquerda"}> */}
						<div className="mid">
							<Row>
								<Col md={6} sm={12}>
									<Input label="Nome" disabled={this.state.disabled} type="text" maxlength="40" minlength="3" required t="name" FValue={this.set} Value={this.state.Form1.name} />
								</Col>
								<Col md={6} sm={12}>
									<Input label="Produto" disabled={this.state.disabled} type="text" required t="produto" FValue={this.set} Value={this.state.Form1.produto} />
								</Col>
							</Row>
							{/* <Row>
											<Col md={6} sm={12}>
												<Input label="E-mail" disabled type="email" maxlength="40" minlength="3" required t="email" FValue={this.set} Value={this.state.Form1.email} error={this.state.Form1.emailerr} />
											</Col>
											<Col md={6} sm={12}>
												<Input label="Confirme seu E-mail" disabled type="email" maxlength="40" minlength="3" required t="emailconf" FValue={this.emailconf} Value={this.state.Form1.emailconf} Merror={!this.state.Form1.emailerr ? "" : "E-mails não conferem"} error={this.state.Form1.emailerr} />
											</Col>
										</Row> */}
							{/* <Row>
											<Col md={6} sm={12}>
												<Input label="Senha" type="password" disabled t="senha" FValue={this.set} Value={this.state.Form1.password} error={this.state.Form1.passworderr} />
											</Col>
											<Col md={6} sm={12}>
												{" "}
												<Input label="Confirme sua senha" disabled type="password" t="senhaconf" FValue={this.senhaconf} Value={this.state.Form1.passwordconf} Merror={!this.state.Form1.passworderr ? "" : "E-mails não conferem"} error={this.state.Form1.passworderr} />
											</Col>
										</Row> */}
							<Row>

								{this.state.Form1.cpf == '' ? (
									<Col md={6} sm={12}>
										<Input label="CNPJ" type="number" disabled={this.state.disabled} mask="99.999.999/9999-99" maxlength="19" minlength="14" required t="cnpj" FValue={this.set} Value={this.state.Form1.cnpj} />
									</Col>
								) :
								(	<Col md={6} sm={12}>
										<Input mask="999.999.999-99" disabled={this.state.disabled} label="CPF" type="number" maxlength="15" minlength="11" required t="cpf" FValue={this.set} Value={this.state.Form1.cpf} />
									</Col>)
						
								}
								<Col md={2} sm={2} xs={4}>
									<Input mask="(99)" label="DDD" disabled={this.state.disabled} type="tel" maxlength="5" minlength="2" required t="ddd" FValue={this.set} Value={this.state.Form1.ddd} />
								</Col>
								<Col md={4} sm={10} xs={8}>
									<Input mask="99999-9999" disabled={this.state.disabled} label="Telefone" type="tel" maxlength="12" minlength="9" required t="telefone" FValue={this.set} Value={this.state.Form1.telefone} />
								</Col>
							</Row>
							<Row>
								<Col md={4} sm={12}>
									<Input type="number" disabled={this.state.disabled} mask="99999-999" maxlength="10" minlength="8" required label="CEP" t="cep" FValue={this.set} Value={this.state.Form1.cep} />
								</Col>
								<Col md={8} sm={12}>
									<Input label="Endereço" disabled={this.state.disabled} type="text" maxlength="40" minlength="3" required t="endereco" FValue={this.set} Value={this.state.Form1.endereco} />
								</Col>
							</Row>
							<Row>
								<Col md={2} sm={4}>
									<Input label="Número" disabled={this.state.disabled} type="number" maxlength="10" required t="numero" FValue={this.set} Value={this.state.Form1.numero} />
								</Col>
								<Col md={3} sm={8}>
									<Input label="Complemento" disabled={this.state.disabled} type="text" t="complemento" FValue={this.set} Value={this.state.Form1.complemento} />
								</Col>
								<Col md={7} sm={12}>
									<Input label="Bairro" type="text" disabled={this.state.disabled} maxlength="40" minlength="3" required t="bairro" FValue={this.set} Value={this.state.Form1.bairro} />
								</Col>
							</Row>
							<Row>
								<Col md={6} sm={12}>
									{" "}
									<Input label="Cidade" type="text" disabled={this.state.disabled} maxlength="40" minlength="2" required t="cidade" FValue={this.set} Value={this.state.Form1.cidade} />
								</Col>
								<Col md={6} sm={12}>
									{" "}
									<Input label="Estado" type="text" disabled={this.state.disabled} maxlength="40" minlength="1" required t="estado" FValue={this.set} Value={this.state.Form1.estado} />
								</Col>
							</Row>
							<Row className="d-flex justify-content-around align-items-center">
								<button onClick={this.liberarEdicao} className="btn-orange-editar">
									Editar
								</button>

								{this.state.Form1.cpf == '' ? (
									<button disabled={this.state.disabled} onClick={this.salvarEdicaoCnpj} className="btn-orange-salvar">
									Salvar
								</button>
								) : (
								<button disabled={this.state.disabled} onClick={this.salvarEdicaoCpf} className="btn-orange-salvar">
									Salvar
								</button>
								)}
							</Row>
						</div>
					</div>
				</div>
				{/* </div> */}
			</Col>
		);
	}
}
