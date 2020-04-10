import React, { Component } from "react";
import Header from '../../../components/Header'
import Logo from "../../../Assets/img/logopostex.png"
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import "./styles.css"


export default class Coleta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            nome: '',
        };

    }


    handleRegister() {
        alert('Em Fase de style');
    }

    render() {
        return (
            <div className='body'>
                <Header ative='Coleta'/>
                <Container className='cont' >
                    <div>
                        <span className='title'>Clientes</span><hr />
                        <Row>
                            <Col>
                                <Form.Label>Remetente</Form.Label>
                                <Form.Control type="text" placeholder="Obrigatório(CNPJ/CPF)" />
                            </Col>
                            <Col>
                                <Form.Label>Remetente</Form.Label>
                                <Form.Control type="text" placeholder="Obrigatório(CNPJ/CPF)" />
                            </Col>
                            <Col>
                                <Form.Label>Pagador</Form.Label>
                                <div  className="mb-3">
                                    <Form.Check inline label="Remetente " type={'radio'} id={`inline-radio-1`} />
                                    <Form.Check inline label="Destinatário " type={'radio'} id={`inline-radio-2`} />
                                </div>
                            </Col>
                        </Row>
                    </div>


                    <div>
                        <span className='title'>Detalhes</span><hr />
                        <Row>
                            <Col>
                                <Form.Label>Volumes</Form.Label>
                                <Form.Control type="number" placeholder="Obrigatório" />
                            </Col>
                            <Col>
                                <Form.Label>Peso Real</Form.Label>
                                <Form.Control type="text" placeholder="Peso em Kilo" />
                            </Col>
                            <Col>
                                <Form.Label>Valor declarado/NF</Form.Label>
                                <Form.Control type="number" placeholder="Obrigatório" />
                            </Col>
                            <Col>
                                <Form.Label>Com Seguro</Form.Label>
                                <div  className="mb-3">
                                    <Form.Check inline label="Sim " type={'radio'} id={`inline-radio-1`} />
                                    <Form.Check inline label="Não " type={'radio'} id={`inline-radio-2`} />
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div>
                        <span className='title'>Tamanhos Somados</span><hr />
                        <Row>
                            <Col>
                                <Form.Label>Largura</Form.Label>
                                <Form.Control type="number" placeholder="Em Cm" />
                            </Col>
                            <Col>
                                <Form.Label>Altura</Form.Label>
                                <Form.Control type="number"  placeholder="Em Cm" />
                            </Col>
                            <Col>
                                <Form.Label>Comprimento</Form.Label>
                                <Form.Control type="number"  placeholder="Em Cm"/>
                            </Col>
                        </Row>
                    </div>

                    <div>
                        <span className='title'>Descrição</span><hr />
                        <Row>
                            <Col>
                                <Form.Label>Descrição dos produtos</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Col>
                        </Row>
                    </div>
                    <Row ><Col xs={8}></Col><Col><div className='FdBg'>Solicitar</div></Col></Row>
                </Container>
            </div>
        )
    }
}
