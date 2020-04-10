import React, { Component, useState, Fragment } from "react";
import ClientNav from "../../../components/ClientNav";
// import Footer from "../../../components/Footer";
import ClientSideBar from "../../../components/ClientSideBar";
import { Row, Col } from "react-bootstrap";
import Input from "../../../components/Input";
import Modal from "react-bootstrap/Modal";

import Btn from "../../../components/Btn";
import "./styles.css";
import api from "../../../Config/api";
import constants from "../../../Config/constants";
import Notifications, { notify } from "react-notify-toast";

export default class ClientHome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Form1: {
				_id: "",
				name: null,
				produto: null,
				cpf: null,
				ddd: null,
				telefone: null,
				email: null,
				cep: null,
				estado: null,
				cidade: null,
				endereco: null,
				numero: null,
				complemento: null,
				bairro: null,
				saldo: "",
				cupon_desconto: ""
			},
			progress: [],
			pending: [],
			valorInserido: "",
			Show: "",
			status: "home"
		};
	}

	componentDidMount() {
		let clientecpf = localStorage.getItem("clientecpf");
		clientecpf = JSON.parse(clientecpf);

		this.setState({
			Form1: clientecpf
		});

		setTimeout(() => {
			api.get(constants.cotacaopending + "_id=" + clientecpf._id).then((response) => {
				this.setState({ pending: response.data.pending });
				console.log(this.state.pending);
			});

			api.get(constants.cotacaoprogress + "_id=" + clientecpf._id).then((response) => {
				this.setState({ progress: response.data.progress });
			});
		}, 1000);
	}

	set = (state, val) => {
		console.log(val);
		console.log(state);
		this.setState({
			valorInserido: val.replace(",", ".")
		});
	};

	inserindoValor = (e) => {
		e.preventDefault();
		let cpf = this.state.Form1.cpf;
		let saldo = parseFloat(this.state.valorInserido);

		api.post("/cpf/saldo", { cpf, saldo }).then((response) => {
			localStorage.setItem("clientecpf", JSON.stringify(response.data.cliente));
			let clientecpf = localStorage.getItem("clientecpf");
			clientecpf = JSON.parse(clientecpf);
			this.setState({
				Form1: clientecpf,
				Show: false,
				valorInserido: ""
			});
			notify.show("Saldo incluido com sucesso", "success", 5000, "");
		});
	};

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
							Insira créditos
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form className="d-flex flex-column align-items-center">
							<Input type="number" t="valorInserido" label="Digite o valor" FValue={this.set} Value={this.state.valorInserido} />
							<button onClick={this.inserindoValor} className="btn-orange-inserir">
								Inserir
							</button>
						</form>
					</Modal.Body>
				</Modal>

				<Col className="organizando" lg={10} md={12} sm={12} xs={12}>
					<div className="contHome">
						<Notifications options={{ zIndex: 99999, top: "50px" }} />
						<h1 className="titulo-home">Home</h1>
						<Row>
							<Col md={6} sm={12}>
								<div className="cardHome d-flex  flex-column flex-lg-row">
									<span className="fonte">Perfil</span>
									<Row className="center empurrando-top">
										<Col md={9} sm={12} xs={12} className="">
											<div className="ledt text-center">
												<h2 className="cor-titulo">{this.state.Form1.name}</h2>
												<div>{this.state.Form1.cpf}</div>
												<div>{this.state.Form1.email}</div>
											</div>
										</Col>
									</Row>
								</div>
							</Col>
							<Col md={6} sm={12}>
								<div className="cardHome d-flex justify-content-around align-items-center flex-column">
									<div className="divSaldo">
										<span className="saldo">SALDO</span>
										<span className="saldo">
											R$ <strong>{this.state.Form1.saldo}</strong>
										</span>
									</div>
									<Row>
										<Col md={12} sm={12} className="center">
											<button className="btn-orange-inserir" onClick={handleOpen}>
												Inserir Saldo
											</button>
										</Col>
									</Row>
								</div>
							</Col>
						</Row>
						<Row>
							<Col md={6} sm={12}>
								<div className="cardHome">
									<div className="fonte">Meus envios pendentes</div>
									<div className="table-responsive altura">
										<table className="table table-hover mt-3">
											<thead>
												<tr>
													<th scope="col">Valor</th>
													<th scope="col">Status</th>
												</tr>
											</thead>
											<tbody>
												{this.state.pending.map((pen) => (
													<tr key={pen.pedido}>
														<td>R$ {pen.valor_total}</td>
														<td>{pen.status}</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							</Col>
							<Col md={6} sm={12}>
								<div className="cardHome">
									<div className="fonte">Meus envios em andamento</div>
									<div className="table-responsive altura">
										<table className="table table-hover mt-3">
											<thead>
												<tr>
													<th scope="col">Nº Pedido</th>
													<th scope="col">Status</th>
												</tr>
											</thead>
											<tbody>
												{this.state.progress.map((res) => (
													<tr key={res.pedido}>
														<td>{res.pedido}</td>
														<td>{res.status}</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</Col>
			</Fragment>
		);
	}
}
