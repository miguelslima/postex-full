import React, { Component, Fragment } from "react";
import { Navbar, Nav, Row, Col, Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./styles.css";
import CheckFile from "../../Assets/img/CheckFile.png";
import Wallet from "../../Assets/img/Wallet.png";
import Pack from "../../Assets/img/Pack.png";
import Home from "../../Assets/img/Home.png";
import Date from "../../Assets/img/Date.png";
import Calculator from "../../Assets/img/Calculator.png";
import Aferir from "../../Assets/img/Aferir.png";
import Gear from "../../Assets/img/Gear.png";
import Chat from "../../Assets/img/Chat.png";
import Indicar from "../../Assets/img/indicar.png";
import ClientNav from "../ClientNav/index";
import { Link } from "react-router-dom";

export default class ClientSideBar extends Component {
	render() {
		return (
			<Fragment>
				<Navbar expand="lg" className="ajuste-toggle" variant="dark">
					<Container className="frente">
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse className="justify-content-end">
							<Nav.Link href="#link">
								<div className="cltSide ">
									<OverlayTrigger
										key="Home"
										placement="right"
										overlay={
											<Tooltip id={`tooltip-right`}>
												<strong>Home</strong>
											</Tooltip>
										}
									>
										<Link to="/Cliente/Principal/Home" className={this.props.ative === "home" ? "cltLinkSideAtive" : "cltLinkSide"}>
											<img src={Home} className="navIcon1" alt="icone home" />
											<span className="span-box">Home</span>
										</Link>
									</OverlayTrigger>

									<OverlayTrigger
										key="Indico"
										placement="right"
										overlay={
											<Tooltip id={`tooltip-right`}>
												<strong>Indico a Postex</strong>
											</Tooltip>
										}
									>
										<Link to="/Cliente/Principal/Indique" className={this.props.ative === "indicar" ? "cltLinkSideAtive" : "cltLinkSide"} eventKey="link-1">
											<img src={Indicar} className="navIcon1" alt="icone indicar" />
											<span className="span-box">Indicar a Postex</span>
										</Link>
									</OverlayTrigger>

									<OverlayTrigger
										key="Calculadora"
										placement="right"
										overlay={
											<Tooltip id={`tooltip-right`}>
												<strong>Calculadora</strong>
											</Tooltip>
										}
									>
										<Link to="/Cliente/Principal/Calculadora" className={this.props.ative === "calculadora" ? "cltLinkSideAtive" : "cltLinkSide"} eventKey="link-1">
											<img src={Calculator} className="navIcon1" alt="icone calculadora" />
											<span className="span-box">Calculadora</span>
										</Link>
									</OverlayTrigger>
									<OverlayTrigger
										key="Agendar"
										placement="right"
										overlay={
											<Tooltip id={`tooltip-right`}>
												<strong>Agendar Envios</strong>
											</Tooltip>
										}
									>
										<Link to="/Cliente/Principal/AgendarEnvios" className={this.props.ative === "agendar" ? "cltLinkSideAtive" : "cltLinkSide"} eventKey="link-2">
											<img src={Date} className="navIcon1" alt="icone agendas" />
											<span className="span-box">Agendar Envios</span>
										</Link>
									</OverlayTrigger>

									<OverlayTrigger
										key="Envios"
										placement="right"
										overlay={
											<Tooltip id={`tooltip-right`}>
												<strong>Envios</strong>
											</Tooltip>
										}
									>
										<Link to="/Cliente/Principal/Envios" className={this.props.ative === "envios" ? "cltLinkSideAtive" : "cltLinkSide"} eventKey="link-2">
											<img src={Pack} className="navIcon1" alt="icone envios" />
											<span className="span-box">Meus Envios</span>
										</Link>
									</OverlayTrigger>

									<OverlayTrigger
										key="Carteira"
										placement="right"
										overlay={
											<Tooltip id={`tooltip-right`}>
												<strong>Carteira</strong>
											</Tooltip>
										}
									>
										<Link to="/Cliente/Principal/Carteira" className={this.props.ative === "carteira" ? "cltLinkSideAtive" : "cltLinkSide"} eventKey="link-2">
											<img src={Wallet} className="navIcon1" alt="icone carteira" />
											<span className="span-box">Minha Carteira</span>
										</Link>
									</OverlayTrigger>

									{/* <OverlayTrigger
					key="Integracoes"
					placement="right"
					overlay={
						<Tooltip id={`tooltip-right`}>
							<strong>Aferir</strong>
						</Tooltip>
					}
				>
					<a href="/Cliente/Home" className={this.props.ative === "int" ? "cltLinkSideAtive" : "cltLinkSide"} eventKey="link-2">
						<img src={Aferir} className="navIcon1" alt="icone pesquisa" />
						<span>Aferir</span>
					</a>
				</OverlayTrigger> */}
									<OverlayTrigger
										key="Gerenciar"
										placement="right"
										overlay={
											<Tooltip id={`tooltip-right`}>
												<strong>Gerenciar</strong>
											</Tooltip>
										}
									>
										<Link to="/Cliente/Principal/Perfil" className={this.props.ative === "gerenciar" ? "cltLinkSideAtive" : "cltLinkSide"} eventKey="link-2">
											<img src={Gear} className="navIcon1" alt="icone configuracao" />
											<span className="span-box">Configurações</span>
										</Link>
									</OverlayTrigger>

									<OverlayTrigger
										key="Sair"
										placement="right"
										overlay={
											<Tooltip id={`tooltip-right`}>
												<strong>Sair</strong>
											</Tooltip>
										}
									>
										<Link
											to="/Cliente"
											className={this.props.ative === "sair" ? "cltLinkSideAtive" : "cltLinkSide"}
											eventKey="link-2"
											onClick={() => {
												localStorage.clear();
											}}
										>
											<img src={Date} className="navIcon1" alt="icone sair" />
											<span className="span-box">Sair</span>
										</Link>
									</OverlayTrigger>
									{/* <OverlayTrigger
					key="Suporte"
					placement="right"
					overlay={
						<Tooltip id={`tooltip-right`}>
							<strong>Suporte</strong>
						</Tooltip>
					}
				>
					<a href="/Cliente/Home" className={this.props.ative === "suport" ? "cltLinkSideAtive" : "cltLinkSide"} eventKey="link-2">
						<img src={Chat} className="navIcon1" alt="icone balao de chat" />
						<span>Suporte</span>
					</a>
				</OverlayTrigger> */}
								</div>
							</Nav.Link>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</Fragment>
		);
	}
}
