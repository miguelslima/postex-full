import React, { Component } from "react";
import Header from '../../../components/Header'
import { Container, Form, Row, Col, Tabs, Tab } from 'react-bootstrap';
import Input from '../../../components/Input'
import Btn from '../../../components/Btn'
import "./styles.css"
import api from "../../../Config/api";
import constants from "../../../Config/constants";

export default class FranquiaRegisterCNPJ extends Component {
    constructor(props) {
        super(props)
        this.state = {
            focus: false,
            Form1: {
                name: null,
                fundacao: null,
                cnpj: null,
                ddd: null,
                telefone: null,
                email: null,
                emailconf: null,
                emailerr: null,
                cep: null,
                estado: null,
                cidade: null,
                endereco: null,
                numero: null,
                bairro: null,
                complemento: null,
                logErr: null,
                logMen: null,
            },

            etapa: 'dadospessoais'
        }
    }
    set = (state, val) => {
        let list = this.state
        list[state] = val
        this.setState({
            Form1: list
        })

    }
    emailconf = (nulo, val) => {
        var list = this.state.Form1
        list['emailconf'] = val
        this.state.Form1.email === val ?

            (
                list['emailerr'] = false
            ) :
            (list['emailerr'] = true)

        this.setState({
            Form1: list
        })

    }
    senhaconf = (nulo, val) => {
        var list = this.state.Form1
        list['senhaconf'] = val
        this.state.Form1.senha === val ?

            (
                list['senhaerr'] = false
            ) :
            (list['senhaerr'] = true)

        this.setState({
            Form1: list
        })
    }
    btn = () => {
        let etapa
        if (this.state.etapa === 'dadospessoais')
            etapa = 'informacoes'
        if (this.state.etapa === 'informacoes'){

                api.post(constants.frnaquiacnpj, this.state)
                    .then(response => {
                        etapa = 'confirmar';

                    })
                    .catch(error => {
                        this.setState({
                            logErr: true,
                            logMen: error.response.data.error
                        })
                    });
        };
        this.setState({
            etapa
        })
    }
red = () => {
    window.location.href = "/Restrita";
}
    render() {
        return (
            <div>
                <Header ative='Restrita'/>
                <Container className='cont'>
                    <div >
                        <div>
                            <div className='progressDiv'>
                                <div></div>
                                <div className='etapaAtivo'>
                                    1
            </div><div className='linhaAtivo'></div>

                                <div className={this.state.etapa != 'dadospessoais' ? 'linhaAtivo' : 'linha'}></div>
                                <div className={this.state.etapa != 'dadospessoais' ? 'etapaAtivo' : 'etapa'}>
                                    2
            </div>
                                <div className={this.state.etapa != 'dadospessoais' ? 'linhaAtivo' : 'linha'}></div>
                                <div className={this.state.etapa === 'confirmar' ? 'linhaAtivo' : 'linha'}></div>
                                <div className={this.state.etapa === 'confirmar' ? 'etapaAtivo' : 'etapa'}>
                                    3
            </div>

                            </div>
                            <div className='progressDivTXT'>
                                <div className='etapaAtivoT'>Dados Pessoais</div>
                                <div className={this.state.etapa != 'dadospessoais' ? 'etapaAtivoT' : 'etapaT'}>Informações Adicionais</div>
                                <div className={this.state.etapa === 'confirmar' ? 'etapaAtivoT' : 'etapaT'}>Confirmar</div></div>
                        </div>
                        <div className='contForm'>
                            <div className={this.state.etapa === 'dadospessoais' ? 'dpMeio' : 'dpEsquerda'}>
                                <div className='mid'>
                                    <Row>
                                        <Col md={6} sm={8}><Input label='Razão Social' t='name' FValue={this.set} Value={this.state.Form1.name}/></Col>
                                        <Col md={3} sm={5}> <Input label='Fundação' t='fundacao' FValue={this.set} Value={this.state.Form1.fundacao}/></Col>
                                    </Row>
                                    <Row>
                                        <Col md={5} sm={10}><Input label='E-mail' t='email' FValue={this.set} Value={this.state.Form1.email} error={this.state.Form1.emailerr} /></Col>
                                        <Col md={5} sm={10}> <Input label='Confirme seu E-mail' t='emailconf' FValue={this.emailconf} Value={this.state.Form1.emailconf} Merror={!this.state.Form1.emailerr ? '' : 'E-mails não conferem'} error={this.state.Form1.emailerr} /></Col>
                                    </Row>
                                    <Row>
                                        <Col md={4} sm={8}><Input label='CNPJ' t='cnpj' FValue={this.set} Value={this.state.Form1.cnpj} /></Col>
                                        <Col md={1} sm={2}><Input label='DDD' t='ddd' FValue={this.set} Value={this.state.Form1.ddd} /></Col>
                                        <Col md={5} sm={10}><Input label='Telefone' t='telefone' FValue={this.set} Value={this.state.Form1.telefone} /></Col>
                                    </Row>
                                </div>
                                <div className='btnDiv'> <Btn label='Próxima Etapa' acao={this.btn} Style='btn-orange-flat' /></div>
                            </div>

                            <div className={this.state.etapa === 'informacoes' ? 'dpMeio' : (this.state.etapa === 'dadospessoais' ? 'dpDireita' : 'dpEsquerda')}>

                                <div className='mid'>
                                    <Row>
                                        <Col md={3} sm={6}><Input label='CEP' t='cep' FValue={this.set} Value={this.state.Form1.cep} /></Col>
                                        <Col md={6} sm={8}><Input label='Endereço' t='endereco' FValue={this.set} Value={this.state.Form1.endereco} /></Col>

                                    </Row>
                                    <Row>
                                        <Col md={2} sm={3}><Input label='Número' t='numero' FValue={this.set} Value={this.state.Form1.numero} /></Col>
                                        <Col md={3} sm={6}><Input label='Complemento' t='complemento' FValue={this.set} Value={this.state.Form1.complemento} /></Col>
                                        <Col md={3} sm={6}><Input label='Bairro' t='bairro' FValue={this.set} Value={this.state.Form1.bairro} /></Col>

                                    </Row>
                                    <Row>
                                        <Col md={4} sm={8}> <Input label='Cidade' t='cidade' FValue={this.set} Value={this.state.Form1.cidade} /></Col>
                                        <Col md={4} sm={8}> <Input label='Estado' t='estado' FValue={this.set} Value={this.state.Form1.estado} /></Col>
                                    </Row>
                                </div>
                                <div className='btnDiv'> <Btn label='Próxima Etapa' acao={this.btn} Style='btn-orange-flat' /></div>

                            </div>
                            {this.state.logErr ? (<p className='subTitle'>{this.state.logMen}</p>) : null}
                            <div className={this.state.etapa === 'confirmar' ? 'dpMeio' : 'dpDireita'}>

                                <h2>CONFIRME SEU EMAIL:</h2>
                                <p>Enviamos um email de confirmação junto com a senha de 1˚ acesso. Favor acesse seu email e verifique.</p>
                                <div className='btnDiv'> <Btn label='Continuar' acao={this.red} Style='btn-orange-flat' /></div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
