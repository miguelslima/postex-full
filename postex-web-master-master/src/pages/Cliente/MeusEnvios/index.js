import React, { Component, Fragment } from "react";
import ClientNav from "../../../components/ClientNav";
import Footer from "../../../components/Footer";
import ClientSideBar from "../../../components/ClientSideBar";
import { Container, Form, Row, Col, Tabs, Tab } from "react-bootstrap";
import Input from "../../../components/Input";
import Btn from "../../../components/Btn";
import "./styles.css";
import Modal from "react-bootstrap/Modal";
import api from "../../../Config/api";
import constants from "../../../Config/constants";

export default class ClientEnvios extends Component {
	constructor(props) {
		super(props);
		this.state = {
			_id: "",
			tipo: "",
			codigo: "",
			cpf: "",
			cnpj: "",
			pedido: "",
			atualizacao: [],
			progress: []
		};
	}

	componentDidMount() {
		let clientecpf = localStorage.getItem("clientecpf");
		clientecpf = JSON.parse(clientecpf);

		this.setState({ _id: clientecpf._id });

		setTimeout(() => {
			console.log(this.state._id);

			api.get(constants.cotacaoprogress + "_id=" + this.state._id).then((response) => {
				this.setState({ progress: response.data.progress });
				console.log(this.state.progress);
			});

			// api.get("rastreamento/buscaid", { _id: this.state.progress.rastreamento._id }).then((response) => {
			// 	console.log(response);
			// });
		}, 1000);
	}

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
			.get(constants.rastreio + "codigo=" + this.state.progress._id)
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
	// set = (state, val) => {
	// 	let list = this.state;
	// 	list[state] = val;
	// 	this.setState({
	// 		Form1: list
	// 	});
	// };
	// chamgTab = (Ntab) => {
	// 	this.setState({
	// 		tab: Ntab
	// 	});
	// };

	render() {
		const handleClose = () => {
			this.setState({ Show: false });
		};
		const handleOpen = () => {
			this.setState({ Show: true });
		};
		return (
			<Fragment>
				<Modal size="lg" show={this.state.Show} onHide={() => handleClose(false)} aria-labelledby="example-modal-sizes-title-lg">
					<Modal.Header closeButton>
						<Modal.Title id="example-modal-sizes-title-lg" className="titulo-modal-insira">
							Status do envio
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="table-responsive altura">
							<table className="table table-hover mt-3">
								<thead>
									<tr>
										<tr>
											<th scope="col">Data</th>
											<th scope="col">Hora</th>
											<th scope="col">Local</th>
											<th scope="col">Cidade</th>
											<th scope="col">Status</th>
										</tr>
									</tr>
								</thead>
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
							</table>
						</div>
					</Modal.Body>
				</Modal>

				<Col className="organizando-envios" lg={10} md={12} sm={12} xs={12}>
					<div className="contEnv p-0">
						<h1 className="titulo-envios">Meus Envios</h1>
						<div className="table-responsive max-tabela">
							<table className="table table-hover mt-0 fundo-tabela">
								<thead>
									<tr>
										<th className="fonte-titulo-tabela" scope="col">
											Número do Pedido
										</th>
										<th className="fonte-titulo-tabela" scope="col">
											Código de Rastreio
										</th>
										<th className="fonte-titulo-tabela" scope="col">
											Ações
										</th>
									</tr>
								</thead>
								<tbody>
									{this.state.progress.map((prog) => (
										<tr key={prog.rastreamento} className="text-align-center">
											<td>{prog.pedido}</td>
											<td>{prog.rastreamento}</td>
											<td>
												{prog.status == "pagamento confirmado" ? (
													<button
														onClick={() => {
															alert("gerar etiqueta");
														}}
														className="btn btn-success"
													>
														Gerar Etiqueta
													</button>
												) : (
													<Fragment>
														<button onClick={handleOpen} className="btn btn-success">
															Status
														</button>
														<button onClick={this.suspenderEntregaRastreio} className="btn btn-danger">
															Suspender
														</button>
													</Fragment>
												)}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						{/* <hr /> */}
						{/* <Row>
								<Col className={this.state.tab === "liberados" ? "tabAtive" : "tab"} onClick={() => this.chamgTab("liberados")}>
									Envios Liberados
								</Col>
								<Col className={this.state.tab === "postados" ? "tabAtive" : "tab"} onClick={() => this.chamgTab("postados")}>
									Envios Postados
								</Col>
								<Col className={this.state.tab === "pagamento" ? "tabAtive" : "tab"} onClick={() => this.chamgTab("pagamento")}>
									Aguardando Pagamento
								</Col>
							</Row> */}
						{/* <div className={this.state.tab === "liberados" ? "visible" : "hide"}>
								<div className="divEnv">
									Você não possui envios liberados no momento.<br></br>
									<Btn label="Calcular Frete" href="Cliente/Calculadora" acao={this.btn} Style="btn-red-outline" />
								</div>
							</div>
							<div className={this.state.tab === "postados" ? "visible" : "hide"}>
								<div className="divEnv">
									Você não possui envios postados no momento.
									<br />
									<Btn label="Calcular Frete" href="Cliente/Calculadora" acao={this.btn} Style="btn-red-outline" />
								</div>
							</div>
							<div className={this.state.tab === "pagamento" ? "visible" : "hide"}>
								<div className="divEnv">
									Você não possui envios aguardando pagamento no momento.<br></br>
									<Btn label="Calcular Frete" href="Cliente/Calculadora" acao={this.btn} Style="btn-red-outline" />
								</div>
							</div> */}
					</div>
				</Col>
			</Fragment>
		);
	}
}
