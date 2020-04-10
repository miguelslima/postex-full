import React, { Component } from "react";
import Header from '../../../components/Header'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import "./styles.css"

export default class Contato extends Component {
    render() {
        return (
            <div className='body'>
                <Header ative='Contato'/>
                <Container className='cont' >
                    <h2 className='Franquia'>Contato</h2>
                    <Row ><Col xs={6}>

                            <div className='mgTop20'>
                                <h3 id="contato-franquia" class="tituloTXT">Fale conosco</h3>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label className='TXTLabel'>Nome</Form.Label>
                                    <Form.Control type="text" placeholder="Seu Nome" />
                                    <Form.Label className='TXTLabel'>E-mail</Form.Label>
                                    <Form.Control type="email" placeholder="name@examplo.com" />
                                    <Form.Label className='TXTLabel'>Telefone</Form.Label>
                                    <Form.Control type="text" placeholder="(21) 12345-6789" />
                                    <Form.Label className='TXTLabel'>Menssagem</Form.Label>
                                    <Form.Control as="textarea" rows="5" />
                                </Form.Group>
                                <a href="#" alt="Contato" class="btn" className='btnLag'>Enviar</a>


                        </div>

                    </Col><Col>
                        </Col></Row>
                </Container>
            </div>
        )
    }
}
