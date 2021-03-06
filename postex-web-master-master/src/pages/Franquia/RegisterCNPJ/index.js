import React, { Component } from "react";
import Header from "../../../components/Header";
import { Container, Form, Row, Col, Tabs, Tab } from "react-bootstrap";
import Input from "../../../components/Input";
import Btn from "../../../components/Btn";
import "./styles.css";
import api from "../../../Config/api";
import { ApiCep } from "../../../Config/api";
import constants from "../../../Config/constants";

export default class FranquiaRegisterCNPJ extends Component {
	constructor(props) {
		super(props);
		this.state = {
			focus: false,
			Form1: {
				name: null,
				fundacao: null,
				cnpj: null,
				ddd: null,
				telefone: null,
				email: null,
				emailconf: null,
				emailerr: null,
				cep: null,
				estado: null,
				cidade: null,
				endereco: null,
				numero: null,
				bairro: null,
				complemento: null,
				latitude: "",
				longitude: ""
			},
			logErr: null,
			logMen: null,
			etapa: "dadospessoais"
		};
	}

	set = (state, val) => {
		var list = this.state.Form1;
		if (state === "cep" && val.length == 8) {
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
				list["latitude"] = info.lat;
				list["longitude"] = info.lon;
				this.setState({
					Form1: list
				});
			});
			console.log(this.state.Form1);
		} else {
			list[state] = val;
			this.setState({
				Form1: list
			});
		}
	};

	emailconf = (nulo, val) => {
		var list = this.state.Form1;
		list["emailconf"] = val;
		this.state.Form1.email === val ? (list["emailerr"] = false) : (list["emailerr"] = true);

		this.setState({
			Form1: list
		});
	};
	// senhaconf = (nulo, val) => {
	// 	var list = this.state.Form1;
	// 	list["senhaconf"] = val;
	// 	this.state.Form1.senha === val ? (list["senhaerr"] = false) : (list["senhaerr"] = true);

	// 	this.setState({
	// 		Form1: list
	// 	});
	// };

	btnVoltar = () => {
		let etapa;
		if (this.state.etapa === "informacoes") etapa = "dadospessoais";
		this.setState({
			etapa: "dadospessoais"
		});
	};

	btn = () => {
		let etapa;
		if (this.state.etapa === "dadospessoais") etapa = "informacoes";
		if (this.state.etapa === "informacoes") {
			console.log(this.state.Form1);
			api
				.post(constants.frnaquiacnpj, this.state.Form1)
				.then((response) => {
					this.setState({
						etapa: "confirmar"
					});
				})
				.catch((error) => {
					this.setState({
						logErr: true,
						logMen: error.response.data.error
					});
				});
		}
		this.setState({
			etapa
		});
	};
	red = () => {
		window.location.href = "/Restrita";
	};
	render() {
		return (
			<div>
				<Header ative="Franqueado" />
				<Container className="cont">
					<div>
						<div>
							<div className="progressDiv">
								<div></div>
								<div className="etapaAtivo">1</div>
								<div className="linhaAtivo"></div>

								<div className={this.state.etapa != "dadospessoais" ? "linhaAtivo" : "linha"}></div>
								<div className={this.state.etapa != "dadospessoais" ? "etapaAtivo" : "etapa"}>2</div>
								<div className={this.state.etapa != "dadospessoais" ? "linhaAtivo" : "linha"}></div>
								<div className={this.state.etapa === "confirmar" ? "linhaAtivo" : "linha"}></div>
								<div className={this.state.etapa === "confirmar" ? "etapaAtivo" : "etapa"}>3</div>
							</div>
							<div className="progressDivTXT">
								<div className="etapaAtivoT">Dados Pessoais</div>
								<div className={this.state.etapa != "dadospessoais" ? "etapaAtivoT" : "etapaT"}>Informações Adicionais</div>
								<div className={this.state.etapa === "confirmar" ? "etapaAtivoT" : "etapaT"}>Confirmar</div>
							</div>
						</div>
						<div className="contForm col-sm-10">
							<div className={this.state.etapa === "dadospessoais" ? "dpMeio" : "dpEsquerda"}>
								<div className="mid">
									<Row>
										<Col md={6} sm={12}>
											<Input label="Razão Social" type="text" maxlength="40" minlength="3" required t="name" FValue={this.set} Value={this.state.Form1.name} />
										</Col>
										<Col md={6} sm={12}>
											{" "}
											<Input label="Fundação" type="date" mask="99/99/99" maxlength="10" required t="fundacao" FValue={this.set} Value={this.state.Form1.fundacao} />
										</Col>
									</Row>
									<Row>
										<Col md={6} sm={12}>
											<Input label="E-mail" type="email" maxlength="40" minlength="3" required t="email" FValue={this.set} Value={this.state.Form1.email} error={this.state.Form1.emailerr} />
										</Col>
										<Col md={6} sm={12}>
											{" "}
											<Input label="Confirme seu E-mail" type="email" maxlength="40" minlength="3" required t="emailconf" FValue={this.emailconf} Value={this.state.Form1.emailconf} Merror={!this.state.Form1.emailerr ? "" : "E-mails não conferem"} error={this.state.Form1.emailerr} />
										</Col>
									</Row>
									<Row>
										<Col md={6} sm={12}>
											<Input label="CNPJ" type="number" mask="99.999.999/9999-99" maxlength="19" minlength="14" required t="cnpj" FValue={this.set} Value={this.state.Form1.cnpj} />
										</Col>
										<Col md={1} sm={2}>
											<Input label="DDD" mask="(99)" type="tel" maxlength="5" minlength="2" required t="ddd" FValue={this.set} Value={this.state.Form1.ddd} />
										</Col>
										<Col md={5} sm={10}>
											<Input label="Telefone" mask="99999-9999" type="tel" maxlength="112" minlength="9" required t="telefone" FValue={this.set} Value={this.state.Form1.telefone} />
										</Col>
									</Row>
								</div>
								<div className="btnDiv">
									{" "}
									<Btn label="Próxima Etapa" acao={this.btn} Style="btn-orange-flat" />
								</div>
							</div>

							<div className={this.state.etapa === "informacoes" ? "dpMeio" : this.state.etapa === "dadospessoais" ? "dpDireita" : "dpEsquerda"}>
								<div className="mid">
									<Row>
										<Col md={4} sm={12}>
										<Input type="number" maxlength="8" minlength="8" required label="CEP" t="cep" FValue={this.set} Value={this.state.Form1.cep} />
											
										</Col>
										<Col md={8} sm={12}>
											<Input type="text" maxlength="40" minlength="3" required label="Endereço" t="endereco" FValue={this.set} Value={this.state.Form1.endereco} />
										</Col>
									</Row>
									<Row>
										<Col md={2} sm={4}>
											<Input type="number" maxlength="10" required label="Número" t="numero" FValue={this.set} Value={this.state.Form1.numero} />
										</Col>
										<Col md={3} sm={8}>
											<Input type="text" label="Complemento" t="complemento" FValue={this.set} Value={this.state.Form1.complemento} />
										</Col>
										<Col md={7} sm={12}>
											<Input type="text" maxlength="40" minlength="3" required label="Bairro" t="bairro" FValue={this.set} Value={this.state.Form1.bairro} />
										</Col>
									</Row>
									<Row>
										<Col md={6} sm={12}>
											{" "}
											<Input type="text" maxlength="40" minlength="2" required label="Cidade" t="cidade" FValue={this.set} Value={this.state.Form1.cidade} />
										</Col>
										<Col md={6} sm={12}>
											{" "}
											<Input type="text" maxlength="40" minlength="1" required label="Estado" t="estado" FValue={this.set} Value={this.state.Form1.estado} />
										</Col>
									</Row>
								</div>
								<div className="btnDiv2">
									<Btn label="Voltar" acao={this.btnVoltar} Style="btn-orange-flat" />
									<Btn label="Próxima Etapa" acao={this.btn} Style="btn-orange-flat" />
								</div>
							</div>
							{this.state.logErr ? <p className="subTitle">{this.state.logMen}</p> : null}
							<div className={this.state.etapa === "confirmar" ? "dpMeio" : "dpDireita"}>
								<h2>CONFIRME SEU EMAIL:</h2>
								<p>Enviamos um email de confirmação junto com a senha de 1˚ acesso. Favor acesse seu email e verifique.</p>
								<div className="btnDiv">
									{" "}
									<Btn label="Continuar" acao={this.red} Style="btn-orange-flat" />
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
		);
	}
}
