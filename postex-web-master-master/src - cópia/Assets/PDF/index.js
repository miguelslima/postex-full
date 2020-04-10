import React , {Component} from "react";
import Header from '../../components/Header'
import Logo from "../../Assets/img/logopostex.png"
import {Container , Form , Row , Col , Table} from 'react-bootstrap';
import "./styles.css"


export default class PDF extends Component {


    render () {
        var email = 'carlos.baptista@sinergiasolucoes.com'
        var cep_origem = '00000-000'
        var cep_destino = '11111-111'
        var servico_adicional = 'serviço 1, serviço 2'
        var volumes =
            [{'quantidade' : '1' , 'altura' : '1.3' , 'comprimento' : '0.8' , 'profundidade' : '0.6'} ,
                {'quantidade' : '4' , 'altura' : '1.7' , 'comprimento' : '1.8' , 'profundidade' : '1.6'} ,
                {'quantidade' : '2' , 'altura' : '1.3' , 'comprimento' : '1.2' , 'profundidade' : '2.1'}
            ]
        var valor_declarado = '0.00'
        return (

            <div className='PDF'>

                <div className="meio">
                    <div className='logoDiv'><img className='logo'
                                                  src='https://www.postexexpress.com.br/imagens/LogoSite.jpg'/></div>
                    <div className='container'>
                        <h3 className='titulo'>Cotação</h3>
                        <label>E-mail: {email}</label><br/>
                        <label>Cep de Origem: {cep_origem}</label><br/>
                        <label>Cep de Destino: {cep_destino}</label><br/>
                        <label>Serviços Adicionais: {servico_adicional}</label><br/>
                        <label>Volumes</label><br/>
                        <Table striped bordered size="sm">
                            <thead>
                            <tr>
                                <th>QTD</th>
                                <th>Altura</th>
                                <th>Largura</th>
                                <th>Profundidade</th>
                            </tr>
                            </thead>
                            <tbody>
                            {volumes.map( ( val ) => {
                                return (
                                    <tr>
                                        <td>{val.quantidade}</td>
                                        <td>{val.altura}</td>
                                        <td>{val.comprimento}</td>
                                        <td>{val.profundidade}</td>
                                    </tr>
                                )
                            } )}

                            </tbody>
                        </Table>
                        <label>Valor Declarado: {valor_declarado}</label><br/>

                    </div>


                </div>
                <div className='bord'>

                </div>

            </div>
        )
    }
}
