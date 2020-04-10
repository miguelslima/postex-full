import React, { Component } from "react";
import { Navbar, Nav, Row, Col, Container, NavDropdown } from "react-bootstrap";
import "./styles.css";
import Logo from "../../Assets/img/logopostexmin.png";

import Cart from "../../Assets/img/Cart.png";
import Not from "../../Assets/img/Not.png";

export default class AdmNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Form1: {
				_id: "",
				name: "Pedro",
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
			}
		};
	}

	// componentDidMount() {
	// 	let clientecpf = localStorage.getItem("clientecpf");
	// 	clientecpf = JSON.parse(clientecpf);

	// 	this.setState({
	// 		Form1: clientecpf
	// 	});

	// 	console.log(this.state.Form1);
	// }

	render() {
		return (
			<Navbar expand="lg" className="cltNav" variant="dark">
				<Container className="espaco">
					<Navbar.Brand href="/adm/Home">
						<img src={Logo} className="logo" alt="imagem da logo da empresa" />
					</Navbar.Brand>
					<Nav.Link className="cltLink" href="#link">
						{this.state.Form1.name}
					</Nav.Link>
				</Container>
			</Navbar>
		);
	}
}
