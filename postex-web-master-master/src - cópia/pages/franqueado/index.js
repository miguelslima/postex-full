import React, { Component } from "react";
import Header from '../../components/Header'
import { Container, Form, Row, Col, Tabs, Tab } from 'react-bootstrap';
import "./styles.css";
import api from "../../Config/api";
import constants from "../../Config/constants";
import Btn from "../../components/Btn";

export default class Franqueado extends Component {
    render() {
        return (
            <div className='body'>
                <Header ative='Franqueado' />
                <Container className='cont' >
                    <h2 className='Franquia'>Seja um Franqueado</h2>
                    <div className="divSac">
                    <h3 className='Franquia2'>Seja Bem-vindo a PostEX Express®</h3>
                    <p className='TXTLabel'>
                        Prezado, venha fazer parte da Rede de Franquias que está presente em 11 estados Brasileiros. Uma franquia é o meio mais seguro de se ter o próprio negócio, investindo em uma marca forte, método testado e aprovado.
                    </p>
                    <p className='TXTLabel'>
                        Por isso, peço sua licença para lhe apresentar uma franquia de grande sucesso no mercado Brasileiro: A PostEX Express.
                    </p>
                    <p className='TXTLabel'>
                        Atualmente possuímos um sistema logístico já integrando o sul do país ao sudeste,centro-oeste, norte e nordeste, e como parte do projeto de crescimento estamos selecionando candidatos para a região SUL, SUDESTE, CENTRO-OESTE, NORTE e NORDESTE.
                    </p>
                    <p className='TXTLabel'>
                        Com um serviço de alto valor agregado (serviços de transporte expresso) e baixo custo de implantação da Franquia PostEX Express, a rede vem ganhando mercado e se fortalecendo no setor.
                    </p>
                    <p className='TXTLabel'>
                        Dentro de alguns diferenciais quero destacar a "Valorização do Franqueado" como ferramenta fundamental para o nosso crescimento, sabendo disso toda a equipe PostEX Express investe fortemente, oferecendo suporte ao franqueado em treinamento operacional e comercial, escolha do ponto e gestão administrativa e financeira.
                    </p>
                    <h3 className='Franquia2'>5 Vantagens do Franqueado PostEX Express®</h3>
                    <p className='TXTLabel'>
                        1 - A rapidez de expansão:
                        A rapidez do sistema de franquias é um dos nossos principais diferenciais desse formato de negócios, tendo em vista que o investimento maior será feito pelos franqueados individualmente, portanto a necessidade de capital da empresa é bem menor. Dessa forma, espaços podem ser ocupados mais rapidamente e ampliando as dificuldades para os concorrentes nesse processo.
                    </p>
                    <p className='TXTLabel'>
                        2 - Operação do negócio por um dono:
                        Tendo o franqueado entendido claramente o seu papel na gestão do negócio, os resultados tendem a ser maiores do que unidades próprias, operadas pela empresa, baseando-se no fato de o dono ter maior capacidade de envolvimento, engajamento e gerenciamento do negócio, buscando a lucratividade e a rentabilidade como focos principais e assim, obter o retorno do investimento.
                    </p>
                    <p className='TXTLabel'>
                        3 - Aspectos jurídicos mais claros:
                        Bastante maduro na economia, o sistema de franquias conta com legislação que estabelece claramente as responsabilidades das partes e da não existência de vínculos trabalhistas e fiscais entre a franqueadora e franqueados, além da possibilidade de controles de padrões, formas e procedimentos operacionais, identidade visual, entre outros, de forma bastante efetiva, gerando ao consumidor a mesma experiência de marca.
                    </p>
                    <p className='TXTLabel'>
                        4 - Poder de compra da Rede:
                        À medida que a Rede PostEX Express® cresce, vai ampliando o poder de negociação da empresa franqueadora perante sua rede de fornecedores homologados, proporcionando economias de escala para a rede de franquias e assim potencializando os resultados do negócio.
                    </p>
                    <p className='TXTLabel'>
                        5 - Organização do conhecimento:
                        Um aspecto fundamental das redes mais estruturadas é permitir a troca de conhecimento entre todos os seus integrantes e assim ampliar o potencial de negócios da marca, uma vez que as práticas bem sucedidas podem ser difundidas consistentemente e assim gerar vantagens competitivas para a marca e seus franqueados.
                    </p>
                    <div className='corpo'>
                        <span className='Franquia2'>Assista o vídeo de como ser um franqueado e Acesse nosso Formulário de cadastro!</span>
                        <div className='mgTop20Meio'>
                            <iframe className='video' src="https://www.youtube.com/embed/z-6PMBF8I2A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <Row>
                            <Col md={6} sm={12} className='center'>
                                <a className='btnFrete' href='/Franquea/Cadastro' >Perfil Físico</a>
                            </Col>
                            <Col md={6} sm={12} className='center'>
                                <a className='btnFrete' href='/Franquea/CNPJ/Cadastro' >Perfil Jurídico</a>
                            </Col>
                        </Row>
                    </div>
                    </div>
                </Container>
            </div>
        )
    }
}
