import React, { Component, Fragment } from "react";
import ClientNav from "../../../components/ClientNav";
// import Footer from "../../../components/Footer";
import Input from "../../../components/Input";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import ClientSideBar from "../../../components/ClientSideBar";
import { Container, Form, Row, Col, Tabs, Tab } from "react-bootstrap";
import Btn from "../../../components/Btn";
import Dollar from "../../../Assets/img/Dollar.png";
import "./styles.css";
import api from "../../../Config/api";
import { FaArrowCircleUp } from "react-icons/fa";
import Notifications, { notify } from "react-notify-toast";

export default class ClientCarteira extends Component {
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
				saldo: ""
			},
			valorInserido: null,
			Show: "",
			lista: []
		};
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
		console.log(saldo);
		console.log(cpf);

		api.post("/cpf/saldo", { cpf, saldo }).then((response) => {
			localStorage.setItem("clientecpf", JSON.stringify(response.data.cliente));
			console.log(response);
			let clientecpf = localStorage.getItem("clientecpf");
			clientecpf = JSON.parse(clientecpf);
			this.setState({
				Form1: clientecpf,
				Show: false
			});
			notify.show("SALDO INCLUÍDO COM SUCESSO!", "success", 5000, "");
			this.componentDidMount();
		});
	};

	componentWillMount() {
		let clientecpf = localStorage.getItem("clientecpf");
		clientecpf = JSON.parse(clientecpf);

		this.setState({
			Form1: clientecpf
		});
	}

	componentDidMount() {
		api.get("/cpf/busca?_id=" + this.state.Form1._id).then((response) => {
			console.log(response.data);
			this.setState({ lista: response.data.lista });
		});
	}

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
					<div className="contCarteira">
						<Notifications options={{ zIndex: 99999, top: "50px" }} />
						<h1 className="center titulo-carteira">Minha Carteira</h1>
						<div className="cardCarteira ml-0 mr-0">
							<h3 className="mg20">
								<strong className="center text-center fonte-titulos">Resumo da Carteira</strong>
							</h3>

							<span className="fonte">
								Saldo: R$ <strong>{this.state.Form1.saldo}</strong>
							</span>
							<Row>
								<Col md={6} sm={12}>
									<button className="btn-orange-inserir" onClick={handleOpen}>
										Inserir Saldo
									</button>
								</Col>
							</Row>
						</div>
						<div>
							<h3 className="ml-4">
								<strong className="fonte-titulos">Tranzações realizadas</strong>
							</h3>
						</div>
						{/* <div className="tranCarteira1">Não há transações para exibir.</div> */}
						<div className="table-responsive tranCarteira1 ml-0 mr-0">
							<table className="table table-hover mt-3">
								<thead className="text-center">
									<tr>
										<th scope="col">Saldo</th>
										<th scope="col">Data</th>
										<th scope="col">Status</th>
									</tr>
								</thead>
								<tbody className="text-center">
									{this.state.lista.map((item, index) => (
										<tr key={index}>
											<td>R${item.valor}</td>
											<td>{item.data}</td>
											<td>{<FaArrowCircleUp color="green" fontSize="20px" />}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</Col>
			</Fragment>
		);
	}
}
