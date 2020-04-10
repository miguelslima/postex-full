import React, { Component } from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import Logo from "../../Assets/img/logopostex.png";
import "./styles.css";

export default class HeaderWhite extends Component {
	render() {
		return (
			<Navbar collapseOnSelect expand="lg" className="navW">
				<Row className="all">
					<Col xs={9}>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Brand href="#home">
							<img src={Logo} className="logo" />
						</Navbar.Brand>
					</Col>
					<Col xs={3}>
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav>
								<Nav.Link href="/">
									<span className="navBLinkW">HOME</span>
								</Nav.Link>
								<Nav.Link className="navBLink" href="/Sac">
									<span className="navBLinkW">SAC</span>{" "}
								</Nav.Link>
								<Nav.Link className="navBLink" href="/Franqueado">
									<span className="navBLinkW">FRANQUEADO </span>
								</Nav.Link>
								<Nav.Link className="navBLink" href="/Rastreamento">
									<span className="navBLinkW">RASTREAMENTO </span>
								</Nav.Link>
								<Nav.Link className="navBLink" href="/Cotacao">
									<span className="navBLinkW">COTAÇÃO</span>{" "}
								</Nav.Link>
								<Nav.Link className="navBLink" href="/Coleta">
									<span className="navBLinkW">COLETA</span>{" "}
								</Nav.Link>
								<Nav.Link className="navBLink" href="/Contato">
									<span className="navBLinkW">CONTATO</span>{" "}
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Col>
				</Row>
			</Navbar>
			// <nav className="nav">
			//     <div className="container">
			//         <div className="bar">
			//             <li><a className='menuText' href="/">HOME</a></li>
			//             <li><a className='menuText' href="/Sac">SAC</a></li>
			//             <li><a className='menuText' href="/Franqueado">SEJA FRANQUEADO</a></li>
			//             <li><a className='menuText' href="/Rastreamento">RASTREAMENTO</a></li>
			//             <li><a className='menuText' href="/Cotacao">COTAÇÃO</a></li>
			//         </div>
			//     </div>
			// </nav>
		);
	}
}
