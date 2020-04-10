import React, { Component, Fragment } from "react";
import ClientSideBar from "../../../components/ClientSideBar";
import ClientNav from "../../../components/ClientNav";
import { Container, Row, Col } from "react-bootstrap";
import Input from "../../../components/Input";
import Btn from "../../../components/Btn";
import "./styles.css";
import api, { ApiCep } from "../../../Config/api";
import constants from "../../../Config/constants";

export default class ClientAgendarEnvios extends Component {
	constructor(props) {
		super(props);
		this.state = {
			_id: "",
			value: "",
			nome: "",
			cotIsOpen: false,
			cep_origem: "",
			cep_destino: "",
			quantidade: "",
			altura: "",
			largura: "",
			profundidade: "",
			volumes: [],
			servico_adicional: [],
			valor_declarado: "",
			email: "",
			valor_total: "",
			mao: "",
			aviso: "",
			reembolso: "",
			postagens: [],
			tabela: [],
			progress: [],
			Form1: {}
		};
	}

	componentDidMount() {
		let clientecpf = localStorage.getItem("clientecpf");
		clientecpf = JSON.parse(clientecpf);

		this.setState({ _id: clientecpf._id });

		setTimeout(() => {
			api.get(constants.cotacaoprogress + "_id=" + clientecpf._id).then((response) => {
				this.setState({ progress: response.data.progress });
				console.log(this.state.progress);
			});
		}, 1000);
	}

	pagarCotacao = (e) => {
		let clientecpf = localStorage.getItem("clientecpf");
		clientecpf = JSON.parse(clientecpf);

		console.log(this.state.progress);
		this.setState({
			Form1: {
				cotacao_id: this.state.progress[0]._id,
				local: clientecpf.endereco,
				uf: clientecpf.estado,
				cpf: clientecpf.cpf,
				cnpj: "",
				nota_fiscal: ""
			}
		});

		setTimeout(() => {
			console.log(this.state.Form1);
			api.post("cotacao/buy_code", this.state.Form1).then((response) => {
				console.log(response);
			});
		}, 1000);
	};

	render() {
		return (
			<Fragment>
				<Col className="organizando-agendar" lg={10} md={12} sm={12} xs={12}>
					<h1 className="titulo-agendar">Agendar Envios</h1>
					<div className="card-agendar col-md-12 mb-2 p-0">
						<div className="table-responsive max-tabela">
							<table className="table table-hover table-bordered mt-0 fundo-tabela">
								<thead>
									<tr>
										<th className="fonte-titulo-tabela-agendar" scope="col">
											Número da Cotação
										</th>
										<th className="fonte-titulo-tabela-agendar" scope="col">
											Valor da Cotação
										</th>
										<th className="fonte-titulo-tabela-agendar" scope="col">
											Ações
										</th>
									</tr>
								</thead>
								<tbody>
									{this.state.progress.map((prog) => (
										<tr key={prog.pedido_cotacao} className="fonte-texto-tabela-agendar">
											<td>{prog.pedido_cotacao}</td>
											<td>R$ {prog.valor_total}</td>
											<td>
												<button onClick={this.pagarCotacao} className="btn btn-success">
													Pagar
												</button>
											</td>
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
