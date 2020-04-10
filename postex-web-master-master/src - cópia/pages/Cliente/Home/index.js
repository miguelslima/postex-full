import React, { Component } from "react";
import ClientNav from '../../../components/ClientNav'
import Footer from '../../../components/Footer'
import ClientSideBar from '../../../components/ClientSideBar'
import { Container, Form, Row, Col, Tabs, Tab } from 'react-bootstrap';
import Input from '../../../components/Input'
import Btn from '../../../components/Btn'
import "./styles.css"

export default class ClientHome extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    set = (state, val) => {
        let list = this.state
        list[state] = val
        this.setState({
            Form1: list
        })

    }

red = () => {
    window.location.href = "/Cliente/Home"; 
}
    render() {
        return (
            <div className='home'>
                <ClientNav  />
                <Row>
                    <Col md={1} sm={3} xs={3}>
                    <ClientSideBar ative='home'/>
                    </Col>
                    <Col className='pd100' md={11} sm={9} xs={9} >
                  
                        <div className='contHome'>
                            <h2>Home</h2>
                        <Row>
                            <Col md={6} sm={12}>
                                <div className='cardHome'>
                                    <span>Perfil</span>
                                    <Row className='center'>
                                        
                                        <Col className='center' md={3} sm={12} xs={12}>
                                        <div className='thumbnail'>

                                        </div>
                                        </Col>
                                        <Col  md={9} sm={12} xs={12}>
                                        <div className='ledt'>
                                        <h1>[Nome]</h1>
                                        <div>000.000.000-00</div>
                                        <div>[E-mail]</div>
                                        <div>[Tel]</div>
                                        </div>
                                        </Col>
                                    </Row>

                                </div>
                            </Col>
                            <Col md={6} sm={12}>
                            <div className='cardHome'>
                            <span>Perfil</span>
                            <div className='divSaldo'>
                                <span className='saldo'>SALDO</span>
                                <span className='saldo'><strong>R$ 0,00</strong></span>
                            </div>
                            <Row><Col md={6} sm={12} className='center'><Btn label='Inserir Créditos' acao={this.btn} Style='btn-orange-flat' /></Col><Col md={6} sm={12} className='center'><Btn label='Ver Mais' acao={this.btn} Style='btn-blue-flat' /></Col></Row>
                            </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} sm={12}>
                                <div className='cardHome'>
                                    <div>
                                <div>Limite de envios simultâneos</div>
                                <div className='small'>O limite é restabelecido após a postagem e conferência dos envio</div>
                                </div>
                                <div>
                                    <ul className='divEnvios'>
                                        <li>Pode gerar: 1 envios</li>
                                        <li>Agarda postar: 0 envios</li>
                                        <li><strong>Limite total: 1 envio</strong></li>
                                    </ul>
                                </div>
                                </div>
                            </Col>
                            <Col md={6} sm={12}>
                            <div className='cardHome'>
                            <div>Status dos últimos envios</div>

                            </div>
                            
                            </Col>
                        </Row>
                        
                        </div>



                        
                        
                        
                        </Col>
                        <Footer />
                </Row>
               
                
            </div>
        )
    }
}