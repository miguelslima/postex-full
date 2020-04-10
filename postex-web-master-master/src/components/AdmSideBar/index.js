import React, { Component, Fragment } from "react";
import {
  Navbar,
  Nav,
  Row,
  Col,
  Container,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import "./styles.css";
import CheckFile from "../../Assets/img/CheckFile.png";
import Wallet from "../../Assets/img/Wallet.png";
import Pack from "../../Assets/img/Pack.png";
import Home from "../../Assets/img/Home.png";
import adm from "../../Assets/img/adm.png";
import sair from "../../Assets/img/Date.png";
import reports from "../../Assets/img/reports.png";
import site from "../../Assets/img/site.png";
import Aferir from "../../Assets/img/Aferir.png";
import Gear from "../../Assets/img/Gear.png";
import vender from "../../Assets/img/gritar.png";
import pergunta from "../../Assets/img/pergunta.png";
import Chat from "../../Assets/img/Chat.png";
import register from "../../Assets/img/register.png";
import ClientNav from "../ClientNav/index";
import { Link } from "react-router-dom";

//import { slide as SlideMenu } from "react-burger-menu";

import { GoGraph, GoTasklist } from "react-icons/go";
import { GiTwoCoins } from "react-icons/gi";
import { MdGroupWork, MdSettings } from "react-icons/md";

export default class AdmSideBar extends Component {
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
                    key="Ger"
                    placement="right"
                    overlay={
                      <Tooltip id={`tooltip-right`}>
                        <strong>Geral</strong>
                      </Tooltip>
                    }
                  >
                    <Link
                      to="/adm/Principal/Pedidos"
                      className={
                        this.props.ative === "home"
                          ? "cltLinkSideAtive"
                          : "cltLinkSide"
                      }
                    >
                      <img src={Home} className="navIcon1" alt="icone home" />
                      <span className="span-box">Geral</span>
                    </Link>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key="Administracao"
                    placement="right"
                    overlay={
                      <Tooltip id={`tooltip-right`}>
                        <strong>KPI</strong>
                      </Tooltip>
                    }
                  >
                    <Link
                      to="/Cliente/Principal/AgendarEnvios"
                      className={
                        this.props.ative === "agendar"
                          ? "cltLinkSideAtive"
                          : "cltLinkSide"
                      }
                      eventKey="link-2"
                    >
                      <GoGraph size={30} color="#717685" />
                      <span className="span-box">KPI</span>
                    </Link>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key="Cadastros"
                    placement="right"
                    overlay={
                      <Tooltip id={`tooltip-right`}>
                        <strong>Franquias</strong>
                      </Tooltip>
                    }
                  >
                    <Link
                      to="/adm/Principal/Franquias"
                      className={
                        this.props.ative === "indicar"
                          ? "cltLinkSideAtive"
                          : "cltLinkSide"
                      }
                      eventKey="link-1"
                    >
                      <img
                        src={register}
                        className="navIcon1"
                        alt="icone cadastros"
                      />
                      <span className="span-box">Franquias</span>
                    </Link>
                  </OverlayTrigger>

                  <OverlayTrigger
                    key="Relatorios"
                    placement="right"
                    overlay={
                      <Tooltip id={`tooltip-right`}>
                        <strong>Logística</strong>
                      </Tooltip>
                    }
                  >
                    <Link
                      to="/Cliente/Principal/Calculadora"
                      className={
                        this.props.ative === "calculadora"
                          ? "cltLinkSideAtive"
                          : "cltLinkSide"
                      }
                      eventKey="link-1"
                    >
                      <GoTasklist size={30} color="#717685" />
                      <span className="span-box">Logística</span>
                    </Link>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key="Relatorios"
                    placement="right"
                    overlay={
                      <Tooltip id={`tooltip-right`}>
                        <strong>Financeiro</strong>
                      </Tooltip>
                    }
                  >
                    <Link
                      to="/Cliente/Principal/Calculadora"
                      className={
                        this.props.ative === "calculadora"
                          ? "cltLinkSideAtive"
                          : "cltLinkSide"
                      }
                      eventKey="link-1"
                    >
                      <GiTwoCoins size={30} color="#717685" />
                      <span className="span-box">Financeiro</span>
                    </Link>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key="Relatorios"
                    placement="right"
                    overlay={
                      <Tooltip id={`tooltip-right`}>
                        <strong>Operacional</strong>
                      </Tooltip>
                    }
                  >
                    <Link
                      to="/Cliente/Principal/Calculadora"
                      className={
                        this.props.ative === "calculadora"
                          ? "cltLinkSideAtive"
                          : "cltLinkSide"
                      }
                      eventKey="link-1"
                    >
                      <MdGroupWork size={30} color="#717685" />
                      <span className="span-box">Operacional</span>
                    </Link>
                  </OverlayTrigger>

                  <OverlayTrigger
                    key="Vendedores"
                    placement="right"
                    overlay={
                      <Tooltip id={`tooltip-right`}>
                        <strong>Comercial</strong>
                      </Tooltip>
                    }
                  >
                    <Link
                      to="/Cliente/Principal/Envios"
                      className={
                        this.props.ative === "envios"
                          ? "cltLinkSideAtive"
                          : "cltLinkSide"
                      }
                      eventKey="link-2"
                    >
                      <img
                        src={vender}
                        className="navIcon1"
                        alt="icone vendedores"
                      />
                      <span className="span-box">Comercial</span>
                    </Link>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key="Vendedores"
                    placement="right"
                    overlay={
                      <Tooltip id={`tooltip-right`}>
                        <strong>Configurações</strong>
                      </Tooltip>
                    }
                  >
                    <Link
                      to="/Cliente/Principal/Envios"
                      className={
                        this.props.ative === "envios"
                          ? "cltLinkSideAtive"
                          : "cltLinkSide"
                      }
                      eventKey="link-2"
                    >
                      <MdSettings size={30} color="#717685" />
                      <span className="span-box">Configurações</span>
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
                      className={
                        this.props.ative === "sair"
                          ? "cltLinkSideAtive"
                          : "cltLinkSide"
                      }
                      eventKey="link-2"
                      onClick={() => {
                        localStorage.clear();
                      }}
                    >
                      <img src={sair} className="navIcon1" alt="icone sair" />
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
