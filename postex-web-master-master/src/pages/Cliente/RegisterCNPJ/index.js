import React, { Component } from "react";
import Header from "../../../components/Header";
import { Container, Form, Row, Col, Tabs, Tab } from "react-bootstrap";
import Input from "../../../components/Input";
import Btn from "../../../components/Btn";
import "./styles.css";
import api, { ApiCep } from "../../../Config/api";
import constants from "../../../Config/constants";

export default class ClientRegisterCNPJ extends Component {
	constructor(props) {
		super(props);
		this.state = {
			focus: false,
			Form1: {
				name: null,
				produto: null,
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
				complemento: null
			},
			logErr: null,
			logMen: null,
			// passwordconf: null,
			// password: null,
			// passworderr: null,
			etapa: "dadospessoais"
		};
	}

	set = (state, val) => {
		var list = this.state.Form1;
		if (state === "cep" && val.length == 8) {
			const cep = val;

			// consultando api
			ApiCep.get(`/${cep}/json`).then((res) => {
				// mudando o estado
				list["cep"] = cep;
				list["endereco"] = res.data.logradouro;
				list["bairro"] = res.data.bairro;
				list["cidade"] = res.data.localidade;
				list["estado"] = res.data.uf;
				list["complemento"] = res.data.complemento;
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

	// set = (state, val) => {
	// 	let list = this.state;
	// 	list[state] = val;
	// 	this.setState({
	// 		Form1: list
	// 	});
	// };
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
				.post(constants.clientecnpjcadastro, this.state.Form1)
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
		window.location.href = "/Cliente";
	};
	render() {
		return (
			<div>
				<Header ative="Cliente" />
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
						<div className="contForm col-md-10">
							<div className={this.state.etapa === "dadospessoais" ? "dpMeio" : "dpEsquerda"}>
								<div className="mid">
									<Row>
										<Col md={6} sm={12}>
											<Input label="Razão Social" type="text" maxlength="40" minlength="3" required t="name" FValue={this.set} Value={this.state.Form1.name} />
										</Col>
										<Col md={6} sm={12}>
											{" "}
											<Input type="text" required label="Produto" t="produto" FValue={this.set} Value={this.state.Form1.produto} />
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
									{/* <Row>
										<Col md={6} sm={12}>
											<Input label="Senha" t="senha" FValue={this.set} Value={this.state.Form1.password} error={this.state.Form1.passworderr} />
										</Col>
										<Col md={6} sm={12}>
											{" "}
											<Input label="Confirme sua senha" t="senhaconf" FValue={this.passwordconf} Value={this.state.Form1.passwordconf} Merror={!this.state.Form1.passworderr ? "" : "E-mails não conferem"} error={this.state.Form1.passworderr} />
										</Col>
									</Row> */}
									<Row>
										<Col md={6} sm={12}>
											<Input label="CNPJ" type="number" mask="99.999.999/9999-99" maxlength="19" minlength="14" required t="cnpj" FValue={this.set} Value={this.state.Form1.cnpj} />
										</Col>
										<Col md={2} sm={2} xs={4}>
											<Input label="DDD" mask="(99)" type="tel" maxlength="5" minlength="2" required t="ddd" FValue={this.set} Value={this.state.Form1.ddd} />
										</Col>
										<Col md={4} sm={10} xs={8}>
											<Input label="Telefone" mask="99999-9999" type="tel" maxlength="12" minlength="9" required t="telefone" FValue={this.set} Value={this.state.Form1.telefone} />
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
											<Input label="CEP" maxlength="8" minlength="8" required  t="cep" FValue={this.set} Value={this.state.Form1.cep} />
										</Col>
										<Col md={8} sm={12}>
											<Input label="Endereço" type="text" maxlength="40" minlength="3" required t="endereco" FValue={this.set} Value={this.state.Form1.endereco} />
										</Col>
									</Row>
									<Row>
										<Col md={2} sm={4}>
											<Input label="Número" type="number" maxlength="10" required t="numero" FValue={this.set} Value={this.state.Form1.numero} />
										</Col>
										<Col md={3} sm={8}>
											<Input label="Complemento" type="text" t="complemento" FValue={this.set} Value={this.state.Form1.complemento} />
										</Col>
										<Col md={7} sm={12}>
											<Input label="Bairro" type="text" maxlength="40" minlength="3" required t="bairro" FValue={this.set} Value={this.state.Form1.bairro} />
										</Col>
									</Row>
									<Row>
										<Col md={6} sm={12}>
											{" "}
											<Input label="Cidade" type="text" maxlength="40" minlength="2" required t="cidade" FValue={this.set} Value={this.state.Form1.cidade} />
										</Col>
										<Col md={6} sm={12}>
											{" "}
											<Input label="Estado" type="text" maxlength="40" minlength="1" required t="estado" FValue={this.set} Value={this.state.Form1.estado} />
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
								<p>Enviamos um email de confirmação. Favor acesse seu email e verifique.</p>
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
