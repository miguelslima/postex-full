import React, {Component} from "react";
import Header from '../../components/Header'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import "./styles.css"
import api from "../../Config/api";
import constants from "../../Config/constants";

export default class Area_restrita extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            cpf : '' ,
            cnpj : '' ,
            usuario : '' ,
            password : '',
            tipo:'',
            logErr: null,
            logMen: null,
        };
    };

    cpflogin = () => {
        api.post(constants.franquiacpflogin ,this.state)
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

    cnpjlogin = () => {
        api.post(constants.franquiacpflogin ,this.state)
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

    usuariologin = () => {
        api.post(constants.franquiacpflogin ,this.state)
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

        if (tipo == "CPF"){
            fada=
                <Form className='logar'>
                    <Row className='center' md={6} sm={12}>
                        <Form.Control onChange={val => this.setState({ cpf: val.target.value })} className='inputFran' type="text" placeholder="CPF"/>
                        <Form.Control onChange={val => this.setState({ password: val.target.value })} className='inputFran' type="password" placeholder="Senha"/>
                        <Form.Label className='texto1' >Esqueci a senha</Form.Label>
                    </Row>
                    <Row className='center' md={6} sm={12}>
                        <a href="#" alt="Contato" onClick={this.cpflogin} className='btnSac3'>Entrar</a>
                    </Row>
                </Form>

        };

        if (tipo == "CNPJ"){
            fada=
                <Form className='logar'>
                    <Row className='center' md={6} sm={12}>
                        <Form.Control onChange={val => this.setState({ cnpj: val.target.value })} className='inputFran' type="text" placeholder="CNPJ"/>
                        <Form.Control onChange={val => this.setState({ password: val.target.value })} className='inputFran' type="password" placeholder="Senha"/>
                        <Form.Label className='texto1' >Esqueci a senha</Form.Label>
                    </Row>
                    <Row className='center' md={6} sm={12}>
                        <a href="#" alt="Contato" onClick={this.cnpjlogin} className='btnSac3'>Entrar</a>
                    </Row>
                </Form>
        };

        if (tipo == "Usuário"){
            fada=
                <Form className='logar'>
                    <Row className='center' md={6} sm={12}>
                        <Form.Control onChange={val => this.setState({ usuario: val.target.value })} className='inputFran' type="text" placeholder="Usuário"/>
                        <Form.Control onChange={val => this.setState({ password: val.target.value })} className='inputFran' type="password" placeholder="Senha"/>
                        <Form.Label className='texto1' >Esqueci a senha</Form.Label>
                    </Row>
                    <Row className='center' md={6} sm={12}>
                        <a href="#" alt="Contato" onClick={this.usuariologin} className='btnSac3'>Entrar</a>
                    </Row>
                </Form>
        };

        return(
            <div className="body">
                <Header ative='Restrita'/>
                <Container className="cont">
                    <h2 className='Franquia'>Área Restrita</h2>

                    <div className="mgTop20Meio">
                        <p  className="tituloTXT">Acesso a Franqueado e Administradores</p>
                        <div className="topo">
                        <Form className='logar'>
                            <Row className='center' md={6} sm={12}>
                                <Form.Label className='texto' >Fazer Login</Form.Label>
                                <Form.Label className='texto1' >Escolha a Forma de Acesso</Form.Label>
                                <Form.Control className='inputFran' as="select" onChange={val => this.setState({ tipo: val.target.value })}>
                                    <option></option>
                                    <option>CPF</option>
                                    <option>CNPJ</option>
                                    <option>Usuário</option>
                                </Form.Control>
                                {fada}
                                <p></p>
                                {this.state.logErr ? (<p className='subTitle2'>{this.state.logMen}</p>) : null}
                            </Row>
                        </Form>
                        </div>
                    </div>


                </Container>
            </div>
        )
    }
}
