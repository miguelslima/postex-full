import React, { Component } from "react";
import Header from '../../../components/Header'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import "./styles.css"

export default class Cotacao extends Component {
    render() {
        return (
            <div className='bodyRas'>
                <Header ative='Cotacao'/>
                <Container className='cont' >
                    <h2 className='Franquia'>Contato</h2>


                    <div className='mgTop20'>
                        <div>
                            <span className='title'>Faça uma cotação de frete!
</span><hr />
                            <Row>
                                <Col>
                                    <Form.Label>Cep do Remetente</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Col>
                                <Col>
                                    <Form.Label>Cep doRemetente</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Col>
                                <Col>
                                    <Form.Label>Valor declarado/NF</Form.Label>
                                    <Form.Control type="number" placeholder="Obrigatório" />
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <span className='title'>Detalhes</span><hr />
                            <Row>
                                <Col>
                                    <Form.Label>Peso Real</Form.Label>
                                    <Form.Control type="text" placeholder="Peso em Kilo" />
                                </Col>
                                <Col>
                                    <Form.Label>Largura</Form.Label>
                                    <Form.Control type="number" placeholder="Em Cm" />
                                </Col>
                                <Col>
                                    <Form.Label>Altura</Form.Label>
                                    <Form.Control type="number" placeholder="Em Cm" />
                                </Col>
                                <Col>
                                    <Form.Label>Comprimento</Form.Label>
                                    <Form.Control type="number" placeholder="Em Cm" />
                                </Col>
                            </Row><br/>
                            <Row ><Col xs={8}></Col><Col><a href='#'><div className='FdBg'>Solicitar</div></a></Col></Row>
                        </div>

                    </div>

                </Container>
            </div>
        )
    }
}
