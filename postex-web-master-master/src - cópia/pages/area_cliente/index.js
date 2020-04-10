import React ,{ Component } from "react";
import Header from '../../components/Header'
import { Container ,Form ,Row ,Col ,Button } from 'react-bootstrap';
import "./styles.css"
import api from "../../Config/api";
import constants from "../../Config/constants";

export default class Area_cliente extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            cpf : '' ,
            cnpj : '' ,
            password : '' ,
            tipo : '' ,
            logErr : null ,
            logMen : null ,
        };
    };

    cpflogin = () => {
        api.post( constants.clientecpf ,this.state )
            .then( response => {
                window.location.href = "/Cliente/Home";

            } )
            .catch( error => {
                this.setState( {
                    logErr : true ,
                    logMen : error.response.data.error
                } )
            } );
    };
    cnpjlogin = () => {
        api.post( constants.clientecnpj ,this.state )
            .then( response => {
                window.location.href = "/Cliente/Home";

            } )
            .catch( error => {
                this.setState( {
                    logErr : true ,
                    logMen : error.response.data.error
                } )
            } );
    };
    cpfesqueci = () => {
        api.post( constants.clientecnpj ,this.state.cpf )
            .then( response => {
                this.setState( {
                    logErr : true ,
                    logMen : response.response.data.error
                } )

            } )
            .catch( error => {
                this.setState( {
                    logErr : true ,
                    logMen : error.response.data.error
                } )
            } );
    };
    cnpjesqueci = () => {
        api.post( constants.clientecnpj ,this.state.cnpj )
            .then( response => {
                this.setState( {
                    logErr : true ,
                    logMen : response.response.data.error
                } )

            } )
            .catch( error => {
                this.setState( {
                    logErr : true ,
                    logMen : error.response.data.error
                } )
            } );
    };

    render () {
        const tipo = this.state.tipo;
        let fada;

        if (tipo == "CPF") {
            fada =
                <Form>
                    <Row className='center'>
                        <Form.Control onChange={val => this.setState( {cpf : val.target.value} )} className="input1"
                                      type="text" placeholder="CPF"/>
                        <Form.Control onChange={val => this.setState( {password : val.target.value} )}
                                      className="input2" type="password" placeholder="Senha"/>
                        <Form.Label className='conteudo' onClick={this.cpfesqueci}>Esqueci a senha</Form.Label>
                        <a href="#" alt="Contato" onClick={this.cpflogin} className='btnSac2'>Entrar</a>
                    </Row>
                </Form>
        }
        ;
        if (tipo == "CNPJ") {
            fada =
                <Form>
                    <Row className='center'>
                        <Form.Control onChange={val => this.setState( {cnpj : val.target.value} )} className="input1"
                                      type="text" placeholder="CNPJ"/>
                        <Form.Control onChange={val => this.setState( {password : val.target.value} )}
                                      className="input2" type="password" placeholder="Senha"/>
                        <Form.Label className='conteudo' onClick={this.cnpjesqueci}>Esqueci a senha</Form.Label>
                        <a href="#" alt="Contato" onClick={this.cnpjlogin} className='btnSac2'>Entrar</a>
                    </Row>
                </Form>
        }
        ;

        return (
            <div className="body">
                <Header ative='Cliente'/>
                <Container className="cont">
                    <h2 className='Franquia'>Área do Cliente</h2>
                    <div className="dividir">

                        {/*logar*/}
                        <div className="divlogin">
                            <p id="contato-franquia" class="titulologin">Fazer Login:</p>
                            <p id="contato-franquia" className="conteudo">Entre em sua conta para aproveitar nossas
                                vantagens.</p>
                            <Form>
                                <Row className='center'>
                                    <Form.Label className='conteudo'>Escolha a Forma de Acesso</Form.Label>
                                    <Form.Control as="select" className='input3'
                                                  onChange={val => this.setState( {tipo : val.target.value} )}>
                                        <option></option>
                                        <option>CPF</option>
                                        <option>CNPJ</option>
                                    </Form.Control>
                                </Row>
                            </Form>
                            {fada}
                            <p></p>
                            {this.state.logErr?(<p className='subTitle2'>{this.state.logMen}</p>) : null}
                        </div>

                        {/*fazer cadastro*/}
                        <div className="divcadastrar">
                            <p id="contato-franquia" className="cadastrou">Ainda não se cadastrou?</p>
                            <div className='mgTop20Meio'>
                                <a href="/Cliente/Cadastro" alt="Contato" className='btnSac1'>CADASTRO FISÍCO</a>
                            </div>
                            <div className='mgTop20Meio'>
                            <a href="/Cliente/CNPJ/Cadastro" alt="Contato" className='btnSac1'>CADASTRO JURÍDICO</a>
                        </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
