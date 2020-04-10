import React, { Component } from "react";
import Header from '../../components/Header'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import "./styles.css"
import api from "../../Config/api";
import constants from "../../Config/constants";

//falta tratar a saida de dados(status)


export default class Rastreamento extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            tipo:'',
            codigo:'',
            nota_fiscal:'',
            cpf:'',
            cnpj:'',
            logErr: null,
            logMen: null,

        };
    };
    codigorastrear = () => {
        api.get( constants.rastreio + "codigo=" + this.state.codigo)
            .then(response => {
                alert("Sucesso, em produção")

            })
            .catch(error => {
                this.setState({
                    logErr: true,
                    logMen: error.response.data.error
                })
            });
    };
    notarastrear = () => {
        api.get(constants.rastreio + "nota_fiscal=" + this.state.nota_fiscal)
            .then(response => {
                alert("Sucesso, em produção")

            })
            .catch(error => {
                this.setState({
                    logErr: true,
                    logMen: error.response.data.error
                })
            });
    };
    render() {
        const tipo = this.state.tipo;
        let fada;

        if (tipo == "Código de Rastreio"){
            fada=
            <Form>
                <Row className='inputRas'>
                    <Form.Control onChange={val => this.setState({ codigo: val.target.value })} className='bgB2' placeholder="Código de Rastreio"/>
                </Row>
                <Row className='mgTop20'>
                    <Col md={8}></Col>
                    <Col className='centro' md={4} sm={12}><a className='btnRas' onClick={this.codigorastrear} href='#'>Rastrear</a></Col>
                </Row>
            </Form>
        };

        if (tipo == "Nota Fiscal"){
            fada=
                <Form>
                    <Row className='inputRas'>
                        <Form.Control onChange={val => this.setState({ nota_fiscal: val.target.value })} className='bgB2' placeholder="Nota Fiscal"  />
                    </Row>
                    <Row className='mgTop20'>
                        <Col md={8}></Col>
                        <Col className='centro' md={4} sm={12}><a className='btnRas' onClick={this.notarastrear} href='#'>Rastrear</a></Col>
                    </Row>
                </Form>
        };

        return (
            <div className='bodyRas'>
                <Header ative='Rastreamento' />
                <Container className='cont' >
                    <h2 className='Rastreamento'>Rastreamento</h2>


                    <div className='divRas'>
                        <span className='subTitle'>Acompanhe seu envio!</span>
                        <p className='subTitle'>Selecione o método para rastrear:</p>
                        <p></p>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Control as="select" className='bgB' onChange={val => this.setState({ tipo: val.target.value })}>
                                <option></option>
                                <option>Código de Rastreio</option>
                                <option>Nota Fiscal</option>
                            </Form.Control>
                        </Form.Group>
                        {fada}
                        <p></p>
                        {this.state.logErr ? (<p className='subTitle'>{this.state.logMen}</p>) : null}

                    </div>


                </Container>
            </div>
        )
    }
}
