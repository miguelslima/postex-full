import React, { Component, Fragment } from "react";
import ClientNav from "../../../components/ClientNav";
// import Footer from "../../../components/Footer";
import ClientSideBar from "../../../components/ClientSideBar";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import Input from "../../../components/Input";
import Btn from "../../../components/Btn";
import Arrow from "../../../Assets/img/Arrow.png";
// import Trash from "../../../Assets/img/Trash.png";
import "./styles.css";
import { MdAddCircleOutline } from "react-icons/md";
import api from "../../../Config/api";

export default class ClientCalculadora extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Form2: {
				cep_origem: "",
				cep_destino: "",
				volumes: [
					{
						quantidade: "",
						altura: "",
						largura: "",
						profundidade: ""
					}
				],
				servico_adicional: [],
				valor_declarado: "",
				email: "",
				_id: ""
			},
			Form3: {
				valor_total: " --- "
			},
			Form4: {
				cotacao_id: "",
				local: "",
				uf: "",
				cpf: "",
				cnpj: "",
				nota_fiscal: ""
			},
			rev: false,
			tab: true
		};
		// this.handleInputChange = this.handleInputChange.bind(this);
	}

	componentDidMount() {
		let clientecpf = localStorage.getItem("clientecpf");
		clientecpf = JSON.parse(clientecpf);
		console.log(clientecpf);
		this.setState({
			Form2: {
				cep_origem: "",
				cep_destino: "",
				volumes: [
					{
						quantidade: "20",
						altura: "02",
						largura: "02",
						profundidade: "02"
					}
				],
				servico_adicional: [],
				valor_declarado: "",
				email: clientecpf.email,
				_id: clientecpf._id
			}
		});
	}

	set = (state, val) => {
		var list = this.state.Form2;
		list[state] = val;
		this.setState({ list });
	};

	set2 = (state, val) => {
		// let list = this.state.Form2.volumes;
		// list[state] = val;
		// this.setState({ list });
	};

	addLinha = (e) => {

	};

	// chamgTab = () => {
	// 	this.setState({
	// 		tab: !this.state.tab
	// 	});
	// };

	handleInputChange = (event) => {
		const target = event.target;
		const value = target.type === "checkbox" ? target.value : target.checked;
		const name = target.name;
		let list = this.state.Form2.servico_adicional;

		if (target.type === "checkbox") {
			if (target.checked === true) {
				list.push(value);
			} else {
				list.pop(value);
			}
		}
	};

	calcularCotacao = () => {
		console.log(this.state.Form2);
		api.post("/cotacao/register_id", this.state.Form2).then((response) => {
			this.setState({ Form3: response.data });
			console.log(this.state.Form3);
		});
	};

	pagarCotacao = (e) => {
		let clientecpf = localStorage.getItem("clientecpf");
		clientecpf = JSON.parse(clientecpf);

		this.setState({
			Form4: {
				cotacao_id: this.state.Form3._id,
				local: clientecpf.endereco,
				uf: clientecpf.estado,
				cpf: clientecpf.cpf,
				cnpj: "",
				nota_fiscal: ""
			}
		});

		setTimeout(() => {
			console.log(this.state.Form4);
			api.post("cotacao/buy_code", this.state.Form4).then((response) => {
				console.log(response);
			});
		}, 1000);
	};

	render() {
		// let { volumes } = this.state.Form2;
		return (
			<Col className="organizando-calc " lg={10} md={12} sm={12} xs={12}>
				<Container className="col-12 p-0">
					<h1 className="titulo-calculadora ">Calculadora</h1>
					{/* <Row>
								<Col className={this.state.tab ? "tabAtive" : "tab"}></Col>
								<Col className={!this.state.tab ? "tabAtive" : "tab"} onClick={this.chamgTab}>
									CALCULAR VÁRIOS
								</Col>
							</Row> */}
					<div className="visible card-info">
						<Row className="m-0">
							<Col md={4} sm={12}>
								<Input Value={this.state.Form2.cep_origem} mask="99999-999" maxlength="11" FValue={this.set} label="CEP de Origem" t="cep_origem" />
							</Col>
							<Col className="iconeDiv" md={1} sm={12}>
								<img src={Arrow} alt="seta" className={this.state.rev ? "iconeRev" : "icone"} />
							</Col>
							<Col md={4} sm={12}>
								<Input Value={this.state.Form2.cep_destino} mask="99999-999" maxlength="11" FValue={this.set} label="CEP de Destino" t="cep_destino" />
							</Col>
							<Col md={3} sm={12}>
								<Input Value={this.state.Form2.valor_declarado} FValue={this.set} label="Valor segurado total" t="valor_declarado" />
							</Col>
						</Row>

						<Row className="m-0">
							<Col md={3} sm={12}>
								<Input Value={this.state.Form2.volumes.quantidade} FValue={this.set2} label="Quantidade" t="quantidade" />
							</Col>
							<Col md={3} sm={12}>
								<Input Value={this.state.Form2.volumes.altura} FValue={this.set2} label="Altura" t="altura" />
							</Col>
							<Col md={3} sm={12}>
								<Input Value={this.state.Form2.volumes.largura} FValue={this.set2} label="Largura" t="largura" />
							</Col>
							<Col md={3} sm={12}>
								<Input Value={this.state.Form2.volumes.profundidade} FValue={this.set2} label="Profundidade" t="profundidade" />
							</Col>
						</Row>

						{/* {volumes.map((val, idx) => {
							let quantidadeId = `quantidade-${idx}`,
								alturaId = `altura-${idx}`,
								larguraId = `largura-${idx}`,
								profundidadeId = `profundidade-${idx}`;
							<Row key={idx} className="m-0">
								<Col md={3} sm={12}>
									<Input Value={volumes[idx].name} name={quantidadeId} data-id={idx} id={idx} FValue={this.set2} label="Quantidade" t="quantidade" />
								</Col>
								<Col md={3} sm={12}>
									<Input Value={this.state.Form2.volumes.altura} FValue={this.set2} label="Altura" t="altura" />
								</Col>
								<Col md={3} sm={12}>
									<Input Value={this.state.Form2.volumes.largura} FValue={this.set2} label="Largura" t="largura" />
								</Col>
								<Col md={3} sm={12}>
									<Input Value={this.state.Form2.volumes.profundidade} FValue={this.set2} label="Profundidade" t="profundidade" />
								</Col>
							</Row>;
						})} */}


						<div className="d-flex justify-content-end">
							{/* <Btn label="Adicionar Volume" acao={this.btn} Style="btn-blue-flat" /> */}
							<OverlayTrigger
								key="add"
								placement="left"
								overlay={
									<Tooltip id={`tooltip-left`}>
										<strong>Adicionar Volume</strong>
									</Tooltip>
								}
							>
								<button onClick={this.addLinha} className="botao-add">
									<MdAddCircleOutline />
								</button>
							</OverlayTrigger>
						</div>
						<Row className="d-flex align-items-center">
							<Col className="d-flex flex-column flex-xl-row justify-content-around" md={6} sm={12}>
								<div className="sw">
									<label className="switch">
										<input type="checkbox" name="checkAviso" value={"Aviso de Recebimento (AR)"} onChange={this.handleInputChange} />
										<span className="slider round"></span>
									</label>
									Aviso de Recebimento (AR)
								</div>
								<div className="sw">
									<label className="switch">
										<input type="checkbox" name="checkMao" value={"Mão Própria"} onChange={this.handleInputChange} />
										<span className="slider round"></span>
									</label>
									Mão Própria
								</div>
							</Col>

							<Col className="center" md={6} sm={12}>
								{/* <div className="center col-md-4"> */}
								<button onClick={this.calcularCotacao} className="btn-orange-calcular">
									Calcular
								</button>
								{/* </div> */}
							</Col>

							{/* <Col className="center" md={4} sm={12}>
									
									</Col> */}
						</Row>
					</div>
					<div className="visible card-info">
						<Row className="m-0 d-flex justify-content-around align-items-center">
							<div className="d-flex">
								<h4 className="texto-carteira">Valor da Cotação:</h4>
								<h4 className="texto-carteira ml-1">R${this.state.Form3.valor_total}</h4>
							</div>
							<button className="btn btn-success botao-pagar font-weight-bold" onClick={this.pagarCotacao}>
								Pagar
							</button>
						</Row>
					</div>
					{/* <div className={!this.state.tab ? "visible" : "hide"}>
						<Row className="dadosSalvos">
							<Col className="center" md={6} sm={12}>
								<span>
									<strong>Você está enviando do CEP:</strong>[CEP_Cadastrado]{" "}
								</span>
								<br />
								<Btn label="Alterar CEP" acao={this.btn} Style="btn-red-outline" />
							</Col>
							<Col className="center" md={6} sm={12}>
								<span>
									<strong>Limite de Envios disoinveis:</strong>1
								</span>{" "}
								<br />
								<Btn label="Alterar CEP" acao={this.btn} Style="btn-red-outline" />
							</Col>
						</Row>

						<div>
									<div>
										<h2>ENVIO 1</h2>
									</div>
									<div>
										<Row>
											<Col md={2} sm={12}>
												<Input label="CEP de Destino" t="destino" />
											</Col>
											<Col md={2} sm={12}>
												<Input label="Alt.(cm)" t="alt" />
											</Col>
											<Col md={2} sm={12}>
												<Input label="Larg.(cm)" t="larg" />
											</Col>
											<Col md={2} sm={12}>
												<Input label="Comp.(cm)" t="comp" />
											</Col>
											<Col md={2} sm={12}>
												<Input label="Peso (Kg)" t="peso" />
											</Col>
											<Col md={2} sm={12}>
												<Input label="Valor segurado" t="valor" />
											</Col>
										</Row>
										<Row>
											<Col md={4} sm={12}>
												<div className="sw">
													<label class="switch">
														<input type="checkbox" />
														<span class="slider round"></span>
													</label>
													Aviso de Recebimento (AR)
												</div>
											</Col>
											<Col md={4} sm={12}>
												<div className="sw">
													<label class="switch">
														<input type="checkbox" />
														<span class="slider round"></span>
													</label>
													Mão Própria
												</div>
											</Col>
											<Col className="right" md={4} sm={12}>
												<img src={Trash} className="iconeSm" />
											</Col>
										</Row>
										<hr />
									</div>
								</div>

								<div>
									<div>
										<h2>ENVIO 2</h2>
									</div>
									<div>
										<Row>
											<Col md={2} sm={12}>
												<Input label="CEP de Destino" t="destino" />
											</Col>
											<Col md={2} sm={12}>
												<Input label="Alt.(cm)" t="alt" />
											</Col>
											<Col md={2} sm={12}>
												<Input label="Larg.(cm)" t="larg" />
											</Col>
											<Col md={2} sm={12}>
												<Input label="Comp.(cm)" t="comp" />
											</Col>
											<Col md={2} sm={12}>
												<Input label="Peso (Kg)" t="peso" />
											</Col>
											<Col md={2} sm={12}>
												<Input label="Valor segurado" t="valor" />
											</Col>
										</Row>
										<Row>
											<Col md={4} sm={12}>
												<div className="sw">
													<label class="switch">
														<input type="checkbox" />
														<span class="slider round"></span>
													</label>
													Aviso de Recebimento (AR)
												</div>
											</Col>
											<Col md={4} sm={12}>
												<div className="sw">
													<label class="switch">
														<input type="checkbox" />
														<span class="slider round"></span>
													</label>
													Mão Própria
												</div>
											</Col>
											<Col className="right" md={4} sm={12}>
												<img src={Trash} className="iconeSm" />
											</Col>
										</Row>
										<hr />
									</div>
								</div>
						<Row>
									<Col md={4} sm={12}>
										<Btn label="Adicionar Volume" acao={this.btn} Style="btn-blue-flat" />
									</Col>
									<Col md={4} sm={0}></Col>
									<Col className="right" md={4} sm={12}>
										{" "}
										<Btn label="Calcular" acao={this.btn} Style="btn-orange-radius" />
									</Col>
								</Row>
					</div> */}
				</Container>
			</Col>
		);
	}
}
