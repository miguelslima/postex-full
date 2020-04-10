import React , { Component } from "react";
import Header from '../../../components/Header'
import fundo from "../../../Assets/img/fundo.jpg"
import "../../Home/styles.css"
import { Row , Col , Container , Form , Table } from "react-bootstrap";
import Search from '../../Assets/img/Search.png'
import Volume from '../../Assets/img/volume.png'


export default class Main extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            value : '' ,
            nome : '' ,
            cotIsOpen : false
        };

    }


    handleRegister () {
        alert( 'Em Fase de style' );
    }

    cotacaoControl = () => {
        this.setState( {
            cotIsOpen : !this.state.cotIsOpen
        } )
        console.log( 'click' )
    }

    render () {
        return (
            <div className='bodyMain'>
                <Header ative='Home'/>
                {/* <img src={fundo} className='d-block w-100'/> */}
                <div className='Postex'>
                    <div className='divPostex'>
                        <div className='txtPostex'>
                            <h2>Sobre Nós</h2>

                            <p>A PostEX Express® é uma empresa de prestação de serviços
                                que atua no ramo de transportes de cargas, com uma estrutura em
                                constante evolução que vai de encontro às necessidades de Distribuição
                                e Logística mais exigentes do mercado. A PostEX Express® conta com
                                profissionais devidamente qualificados, que atuam no mercado de
                                transportes há mais de 14 anos, procurando sempre alcançar a excelência
                                nos serviços prestados. Nossa prioridade é a efetiva satisfação
                                de nossos clientes. </p></div>
                    </div>
                </div>
                <div><span className='tituloMain'>Saiba mais sobre nossas franquias.</span></div>
                <div className='divideo'>


                    <div>
                        <iframe className='video' src="https://www.youtube.com/embed/z-6PMBF8I2A" frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                    </div>
                </div>

                <div className='cotacao'>
                    <Row><Col md={4}></Col><Col md={4}>

                        <a onClick={this.cotacaoControl} className='btnCotacao'><img src={Search}
                                                                                     className='socialIcons'/>
                            <span className='txtBtnCot'>Cotação Online</span>
                        </a>

                    </Col><Col md={4}></Col></Row>
                    <div className={this.state.cotIsOpen? 'cotacaoDiv' : 'cotacaoDiv-hide'}>
                        <h2 className='tituloMain'>Cotação</h2>
                        <span className='descricaoMain'>Você pode simular e fazer uma nova cotação!</span>
                        <Container>
                            <div className='mgTop-20'>
                                <h3 className='subTitulo-20'>Nova cotação</h3>
                                <hr/>
                                <Row>
                                    <Col>
                                        <Form.Label>Cep de Origem</Form.Label>
                                        <Form.Control/>
                                    </Col>
                                    <Col>
                                        <Form.Label>Cep de Destino</Form.Label>
                                        <Form.Control/>
                                    </Col>
                                </Row>
                                <div className='volumes'>
                                    <h3 className='tituloVolume'>Volumes</h3>
                                    <span className='descricaoMain'>Antes de informar os dados abaixo sobre volumes leia as &nbsp;
                                        <a className='cotacaoLink' href='#'> informações sobre a cotação.</a></span>
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
                                        <Col sm={12} md={6}>
                                            <img src={Volume} className='imgVolume'/>
                                        </Col>
                                        <Col sm={12} md={6} className='over-x'>

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
                                                    <td><span className='minus'>Remover</span></td>
                                                    <td><Form.Control/></td>
                                                    <td><Form.Control/></td>
                                                    <td><Form.Control/></td>
                                                    <td><Form.Control/></td>
                                                </tr>
                                                <tr>
                                                    <td><span className='minus'>Remover</span></td>
                                                    <td><Form.Control/></td>
                                                    <td><Form.Control/></td>
                                                    <td><Form.Control/></td>
                                                    <td><Form.Control/></td>
                                                </tr>
                                                <tr>
                                                    <td className='pluss'>Adicionar</td>
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
                                            id={`default-checkbox`}
                                            label={`Mão Própria`}
                                        />
                                        <hr/>
                                        <Form.Check
                                            className='TXT-18'
                                            type={'checkbox'}
                                            label={`Aviso de Recebimento`}
                                            id={`disabled-default-checkbox`}
                                        />
                                        <hr/>
                                        <Form.Check
                                            className='TXT-18'
                                            type={'checkbox'}
                                            id={`default-checkbox`}
                                            label={`Reembolso`}
                                        />

                                    </div>
                                    <div className='mgTop20'>
                                        <h3 className='subTitulo-20'>Calcular Frete</h3>
                                        <hr/>
                                        <Row><Col md={6} sm={12} className='center'> <a className='btnFrete'
                                                                                        href='#'>Imprimir</a></Col><Col
                                            md={6} sm={12} className='center'> <a className='btnFrete'
                                                                                  href='#'>E-mail</a></Col></Row>

                                    </div>
                                </div>
                            </div>


                        </Container>


                    </div>
                </div>

            </div>
        )
    }
}
