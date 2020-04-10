import React, { Component } from "react";
import Header from "../../components/Header";
import { Container, Form, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import "./styles.css";
import QuemSomos from "../../Assets/img/quemSomos.jpg";
import { MdSearch } from "react-icons/md";
import api from '../../Config/api'

export default class Sac extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cep: "",
			assunto: "",
			conteudo: "",
			nome: "",
			email: "",
			telefone: "",
			latitude: "",
			longitude: ""
		};
	}

	set = () => {
		const cep = this.state.cep;
		if (cep.length == 8) {
			const CepCoords = require("coordenadas-do-cep");
			CepCoords.setOpcoes({
				precisao: 6
			});
			CepCoords.getByCep(cep, (err, info) => {
				this.setState({
					latitude: info.lat,
					longitude: info.lon
				});
				console.log(this.state);
			});
		}
	};
	enviarEmail = (e) => {
		e.preventDefault();
		api.post('/sac/register', {nome : this.state.nome,email: this.state.email,telefone: this.state.telefone,assunto: this.state.assunto,conteudo: this.state.conteudo}).then(response =>{
			console.log(response)
		})
		
	};

	render() {
		return (
			<div className="body">
				<Header ative="Sac" />
				<Container className="cont">
					<h2 className="Franquia">Sac</h2>

					<div className="divSac">
						<h3 className=" titulo-h3">Pode contar conosco!</h3>
						<p className="TXTLabel">Nossa equipe está a disposição para auxiliar você a esclarecer todas as suas dúvidas.</p>
						<Form.Label className="texto-cep">Verifique as franquias por perto</Form.Label>
						<InputGroup className="mb-3">
							<Form.Control onChange={(val) => this.setState({ cep: val.target.value })} type="text" required placeholder="Digite seu CEP" />
							<InputGroup.Append>
								<Button className="botao-pesquisar" onClick={this.set}>
									<MdSearch className="lupa" />
								</Button>
							</InputGroup.Append>
						</InputGroup>
						<div className="table-responsive altura-table">
							<table className="table table-hover mt-3">
								<thead>
									<tr>
										<th scope="col">Franquia</th>
										<th scope="col">Endereço</th>
									</tr>
								</thead>
								<tbody>
									{/* {this.state.atualizacao.map((atualiza) => ( */}
									<tr>
										<td>Franquia expor</td>
										<td>Rua defensor publico zilmar</td>
									</tr>
									<tr>
										<td>Franquia expor</td>
										<td>Rua defensor publico zilmar</td>
									</tr>
									<tr>
										<td>Franquia expor</td>
										<td>Rua defensor publico zilmar</td>
									</tr>
									<tr>
										<td>Franquia expor</td>
										<td>Rua defensor publico zilmar</td>
									</tr>
									<tr>
										<td>Franquia expor</td>
										<td>Rua defensor publico zilmar</td>
									</tr>
									<tr>
										<td>Franquia expor</td>
										<td>Rua defensor publico zilmar</td>
									</tr>
									<tr>
										<td>Franquia expor</td>
										<td>Rua defensor publico zilmar</td>
									</tr>
								</tbody>
							</table>
						</div>
						{/* <div>FRANQUIAS.MAP</div> */}
						<img src={QuemSomos} className="imgVolume" alt="quem somos" />
						<Form className="form-duvidas">
							<Form.Label className="Franquia2">Solicite informaçoes e tire suas dúvidas abaixo: </Form.Label>
							<br></br>

							<Row className="d-flex flex-column flex-lg-row mt-2 mb-2">
								<Col className="input-duvida">
									<Form.Label className="TXTLabel">Nome</Form.Label>
									<Form.Control onChange={(val) => this.setState({ nome: val.target.value })} type="text" required placeholder="Digite seu nome" />
								</Col>
								<Col className="input-duvida">
									<Form.Label className="TXTLabel">Email</Form.Label>
									<Form.Control onChange={(val) => this.setState({ email: val.target.value })} type="email" required placeholder="Digite seu e-mail" />
								</Col>
								<Col className="input-duvida">
									<Form.Label className="TXTLabel">Telefone</Form.Label>
									<Form.Control onChange={(val) => this.setState({ telefone: val.target.value })} type="tel" required placeholder="Digite seu telefone" />
								</Col>
							</Row>
							<Form.Label className="TXTLabel">Assunto</Form.Label>
							<Form.Control onChange={(val) => this.setState({ assunto: val.target.value })} type="text" placeholder="Digite o Assunto" required />
							<Form.Control onChange={(val) => this.setState({ conteudo: val.target.value })} as="textarea" className="TXTArea" rows="5" placeholder="O que deseja saber?" required />
						</Form>
						<div className="mgTop20Meio d-flex justify-content-center">
							<a href="#" alt="Contato" className="btnSac col-lg-6 col-12" onClick={this.enviarEmail}>
								Enviar
							</a>
						</div>
					</div>
				</Container>
			</div>
		);
	}
}
