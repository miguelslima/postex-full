import React, { Component } from "react";
import ClientNav from '../../../components/ClientNav'
import Footer from '../../../components/Footer'
import ClientSideBar from '../../../components/ClientSideBar'
import { Container, Form, Row, Col, Tabs, Tab } from 'react-bootstrap';
import Input from '../../../components/Input'
import Btn from '../../../components/Btn'
import Arrow from '../../../Assets/img/Arrow.png'
import "./styles.css"

export default class ClientCalculadora extends Component {
    constructor(props) {
        super(props)
        this.state = {
                rev: false
        }
    }
     set = (state, val) => {
        let list = this.state
        list[state] = val
        this.setState({
            Form1: list
        })

    }

    render() {
        return (
            <div className='calculadora'>
                <ClientNav />
                <Row>
                    <Col md={1} sm={3} xs={3}>
                        <ClientSideBar ative='calculadora' />
                    </Col>
                    <Col className='pd100' md={11} sm={9} xs={9} >
                        <Container>
                        <Row>
                            <Col md={3} sm={12}><Input label='CEP de Origem' t='cepO' /></Col>
                            <Col  className='iconeDiv' md={1} sm={12}><img src={Arrow} className={this.state.rev ? 'iconeRev' : 'icone'}/></Col>
                            <Col md={3} sm={12}><Input label='CEP de Destino' t='cepD' /></Col>
                            <Col md={3} sm={12}><Input label='Valor segurado total' t='cepD' /></Col>

                        </Row>
                        <Row>
                            <Col md={2} sm={12}><Input label='Quantidade' t='numero' /></Col>
                            <Col md={2} sm={12}><Input label='Altura' t='comp' /></Col>
                            <Col md={2} sm={12}><Input label='Laegura' t='bairro' /></Col>
                            <Col md={2} sm={12}><Input label='Comprimento' t='bairro' /></Col>
                            <Col md={2} sm={12}><Input label='Peso' t='bairro' /></Col>

                        </Row>
                        <Row>
                            <Col className='center' md={4} sm={12}><Btn label='Adicionar Volume' acao={this.btn} Style='btn-blue-flat' /></Col>
                            <Col className='center' md={4} sm={12}>
                                <div className='sw'>
                                <label class="switch">
                                <input type="checkbox" />
                                    <span class="slider round"></span>
                                  </label>Aviso de Recebimento (AR)
                                  </div>
                                  </Col>
                                  <Col md={4} sm={12}>
                                  <div className='sw'>
                                <label class="switch">
                                <input type="checkbox" />
                                    <span class="slider round"></span>
                                  </label>Mão Própria
                                  </div>
                                  </Col>
                        </Row>
                        </Container>
                    </Col>
                        <Footer />
                </Row>


            </div>
                )
            }
}