import React , { Component } from "react";
import Header from '../../components/Header'
import fundo from "../../Assets/img/fundo.jpg"
import "./styles.css"
import { Row , Col , Container , Form , Table } from "react-bootstrap";
import Search from '../../Assets/img/Search.png'
import Volume from '../../Assets/img/volume.png'
import Logo from "../../Assets/img/logopostexmin.png";
import Coletalogo from "../../Assets/img/iconColeta.png";
import Rastreiologo from "../../Assets/img/iconRastreamento.png";
import Contatologo from "../../Assets/img/iconContato.png";
import api from "../../Config/api";
import constants from "../../Config/constants";
import Axios from "axios";


export default class Home extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            value : '' ,
            nome : '' ,
            cotIsOpen : false,
            cep_origem: '',
            cep_destino: '',
            quantidade: '',
            altura: '',
            largura: '',
            profundidade: '',
            volumes: [],
            servico_adicional: [],
            valor_declarado: '',
            email: '',
            valor_total: '',
            mao: '',
            aviso: '',
            reembolso: '',

        };

    };
    cotacaoControl = () => {
        this.setState( {
            cotIsOpen : !this.state.cotIsOpen
        } )
        console.log( 'click' )
    };
    cotacaoaviso = () => {
        alert("Pedir a Postex o texto para colocar aqui!")
    };
    removerItem = () => {
        alert("Em construção")
    };
    addItem = () => {
        alert("Em construção")
    };
    enviaremail = () => {
        this.setState({volumes:[{"quantidade":this.state.quantidade,"altura":this.state.altura,"largura":this.state.largura,"profundidade":this.state.profundidade}]});
        this.setState({servico_adicional:[this.state.mao,this.state.aviso,this.state.reembolso]});

        Axios.post("http://104.237.10.79:5022/cotacao/registerpdf" ,this.state )
            .then(response => {
                console.log(response.data);
                alert("Cotação realizada com Sucesso!");

            })
            .catch(error => {
                alert(error.response.data.error)
            });

    };
    enviarpdf = () => {
        this.setState({volumes:[{"quantidade":this.state.quantidade,"altura":this.state.altura,"largura":this.state.largura,"profundidade":this.state.profundidade}]});
        this.setState({servico_adicional:[this.state.mao,this.state.aviso,this.state.reembolso]});

        Axios.post("http://104.237.10.79:5022/cotacao/registerpdf",this.state)
            .then(function (response) {
                // handle success
                console.log(response.data);
                alert("Cotação realizada com Sucesso!");
            })
            .catch(error => {
                alert(error.response.data.error)
            });
    };

    render () {
        return (
            <div className='bodyMain'>
                <Header ative='Home'/>
                {/* <img src={fundo} className='d-block w-100'/> */}
                <div className='Postex'>
                    <div className='divPostex'>
                        <div className='txtPostex'>
                            <h2>Seja bem vindo ao novo!</h2>

                            <p>Coletas solicitadas pelo site agilizam nosso processo embarque,
                                evita filas e você recebe sua encomenda mais rápido! Pense nisso!
                            </p>
                        </div>
                    </div>
                </div>
                <div className='selecionar'>

                    <a className='addcampos' href="/Cliente">

                        <img src={Coletalogo} className='logoadd' />
                        <h4>Agende sua coleta</h4>
                        <p>Solicite já!</p>
                    </a>

                    <a className='addcampos' href="/Rastreamento">
                        <img src={Rastreiologo} className='logoadd'/>
                        <h4>Rastreie sua encomenda</h4>
                        <p>Saiba onde sua encomenda está agora!</p>
                    </a>

                    <a className='addcampos' href="/Sac">
                        <img src={Contatologo} className='logoadd'/>
                        <h4>Entre em contato</h4>
                        <p>Vamos ter o prazer em lhe atender!</p>
                    </a>
                </div>
                <div>
                    <div className='cotacao'>
                        <Row><Col md={4}></Col><Col md={4}>

                            <a onClick={this.cotacaoControl} className='btnCotacao'><img src={Search}
                                                                                         className='socialIcons'/>
                                <span className='txtBtnCot'>Cotação Online</span>
                            </a>

                        </Col><Col md={4}></Col></Row>
                        <div className={this.state.cotIsOpen? 'cotacaoDiv' : 'cotacaoDiv-hide'}>
                            <h2 className='tituloMain'>Cotação</h2>
                            <span className='descricaoMain'>Você pode simular e fazer uma cotação de forma simples!</span>
                            <Container>
                                <div className='mgTop-20'>
                                    <h3 className='subTitulo-20'>Nova cotação</h3>
                                    <hr/>
                                    <Row>
                                        <Col>
                                            <Form.Label>Cep de Origem</Form.Label>
                                            <Form.Control onChange={val => this.setState({ cep_origem: val.target.value })} type="number" placeholder="00000-000" />
                                        </Col>
                                        <Col>
                                            <Form.Label>Cep de Destino</Form.Label>
                                            <Form.Control onChange={val => this.setState({ cep_destino: val.target.value })} type="number" placeholder="00000-000" />
                                        </Col>
                                        <Col>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control onChange={val => this.setState({ email: val.target.value })} type="email" placeholder="email"/>
                                        </Col>
                                        <Col>
                                            <Form.Label>Valor Declarado</Form.Label>
                                            <Form.Control onChange={val => this.setState({ valor_declarado: val.target.value })} type="number" placeholder="R$ 00,00"/>
                                        </Col>
                                    </Row>
                                    <div className='volumes'>
                                        <h3 className='tituloVolume'>Volumes</h3>
                                        <span className='descricaoMain'>Antes de informar os dados abaixo sobre volumes leia as &nbsp;
                                            <a className='cotacaoLink' href='#' onClick={this.cotacaoaviso}> informações sobre a cotação.</a></span>
                                        {/* <Row>
                                        <Col sm={12} md={4}>
                                            <Form.Label>Peso Real</Form.Label>
                                            <Form.Control className='bgGray' placeholder="Kg" />
                                        </Col>
                                        <Col>
                                        </Col>
                                        <Col>
                                        </Col>
                                    </Row> */}
                                        <Row>
                                            <Col sm={8} md={4}>
                                                <img src={Volume} className='imgVolume'/>
                                            </Col>
                                            <Col sm={12} md={8} className='over-x'>

                                                <Table striped bordered hover>
                                                    <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th className='TXT'>QTD/Volume</th>
                                                        <th className='TXT'>Altura(cm)</th>
                                                        <th className='TXT'>Largura(cm)</th>
                                                        <th className='TXT'>Profundidade(cm)</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td><span className='minus' onClick={this.removerItem}>Remover</span></td>
                                                        <td>
                                                            <Form.Control onChange={val => this.setState({ quantidade: val.target.value })} type="number"/>
                                                        </td>
                                                        <td>
                                                            <Form.Control onChange={val => this.setState({ altura: val.target.value })} type="number"/>
                                                        </td>
                                                        <td>
                                                            <Form.Control onChange={val => this.setState({ largura: val.target.value })} type="number"/>
                                                        </td>
                                                        <td>
                                                            <Form.Control onChange={val => this.setState({ profundidade: val.target.value })} type="number"/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='pluss' onClick={this.addItem}>Adicionar</td>
                                                        <td colSpan='4'></td>
                                                    </tr>
                                                    </tbody>
                                                </Table>


                                            </Col>
                                        </Row>
                                        <h3 className='subTitulo-20'>Serviços adicionais</h3>
                                        <hr/>
                                        <div key={`default-checkbox`} className="mb-3">
                                            <Form.Check
                                                className='TXT-18'
                                                type={'checkbox'}
                                                id={`mao`}
                                                label={`Mão Própria`}
                                                onChange={val => this.setState({ mao: "Mão Própria" })}
                                            />
                                            <hr/>
                                            <Form.Check
                                                className='TXT-18'
                                                type={'checkbox'}
                                                id={`aviso`}
                                                label={`Aviso de Recebimento`}
                                                onChange={val => this.setState({ aviso: "Aviso de Recebimento" })}

                                            />
                                            <hr/>
                                            <Form.Check
                                                className='TXT-18'x
                                                type={'checkbox'}
                                                id={`reembolso`}
                                                label={`Reembolso`}
                                                onChange={val => this.setState({ reembolso: "Reembolso" })}

                                            />
                                        </div>
                                        <div className='mgTop20'>
                                            <h3 className='subTitulo-20'>Calcular Frete</h3>
                                            <hr/>
                                            <Row>
                                                <Col md={6} sm={12} className='center'>
                                                    <a className='btnFrete' href='#' onClick={this.enviarpdf}>Imprimir</a>
                                                </Col>
                                                <Col md={6} sm={12} className='center'>
                                                    <a className='btnFrete' href='#' onClick={this.enviaremail}>E-mail</a>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
