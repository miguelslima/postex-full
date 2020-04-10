import React, { Component } from "react";
import Header from "../../components/Header";
import { Container, Form, Row, Col, Tabs, Tab } from "react-bootstrap";
import "./styles.css";
import api from "../../Config/api";
import constants from "../../Config/constants";
import Btn from "../../components/Btn";

export default class Franqueado extends Component {
	render() {
		return (
			<div className="body">
				<Header ative="Franqueado" />
				<Container className="cont">
					<h2 className="Franqueado">Seja um Franqueado</h2>
					<div className="divSac">
						<h3 className="titulo-postex">Bem-vindo a PostEX Express®</h3>
						<div className="corpo">
							<h4 className="titulo-introducao">Busca empreender, abrir um negócio próprio?</h4>

							<p className="paragrafo-introducao">
								Então vem comigo que vou lhe apresentar a <b>Postex Express!</b>
							</p>

							<p className="paragrafo-introducao">
								A seguir algumas considerações sobre esse <b>novo modelo de negócio!</b>
							</p>

							<p className="paragrafo-introducao">
								É uma satisfação muito grande poder apresentar a você, o <b>Sistema de Franquia da PostEX Express®</b>. Ser franqueado significa ter nas mãos uma <b>marca forte</b>, com <b>serviços de altíssima qualidade</b> em coleta e entrega de pequenas e médias mercadorias.
							</p>

							<p className="paragrafo-introducao">
								Desenvolvemos alguns modelos de franquias para você, e de acordo com nossa experiência são as melhores opções que proporcionam uma <b>alta taxa de retorno</b>, lembramos que mesmo o modelo sendo testado e aprovado é importante o envolvimento direto do franqueado na operação, pois o sucesso depende muito da forma como a empresa é gerida e no tratamento com clientes além de seguir o <b>padrão de atendimento</b> do sistema PostEX Express.
							</p>

							<span className="texto-video">Assista o vídeo de como ser um franqueado e Acesse nosso Formulário de cadastro!</span>
							<div className="mgTop20Meio">
								<iframe className="video-franqueado" src="https://www.youtube.com/embed/z-6PMBF8I2A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
							<Row>
								<Col lg={6} sm={12} className="center">
									<a className="btnPerfil-fisico" href="/Franquea/Cadastro">
										Perfil Físico
									</a>
								</Col>
								<Col lg={6} sm={12} className="center">
									<a className="btnPerfil-juridico" href="/Franquea/CNPJ/Cadastro">
										Perfil Jurídico
									</a>
								</Col>
							</Row>
						</div>
					</div>
				</Container>
			</div>
		);
	}
}
