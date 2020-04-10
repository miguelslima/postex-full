import React ,{ Component } from "react";
import Header from '../../components/Header'
import { Container ,Form ,Row ,Col ,Button } from 'react-bootstrap';
import "./styles.css"
import QuemSomos from "../../Assets/img/quemSomos.jpg";

export default class Sac extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            assunto : '' ,
            conteudo : '' ,
            nome: '',
            email: '',
            telefone: '',
        };
    };
    enviarEmail = () => {
        alert("Perguntar a Postex se envia uma copia para o cliente no mesmo momento")
    };
    render () {
        return (
            <div className="body">
                <Header ative='Sac'/>
                <Container className="cont">
                    <h2 className='Franquia'>Sac</h2>

                    <div className="divSac">
                        <h3 className='Franquia2'>Quem Somos</h3>
                        <p className='TXTLabel'>
                            A PostEX Express® é uma empresa atualizada com as necessidades logísticas que imperam em nossa realidade globalizada. Hoje, mais do que nunca, transparência, eficiência, confiabilidade, comprometimento e competência são fatores fundamentais e que determinam o sucesso de uma organização. E são exatamente esses fatores que empregamos na condução das atividades da PostEX Express®.
                        </p>
                        <p className='TXTLabel'>
                            Com experiência de mais de 15 anos no segmento de transporte de pequenas e médias cargas, temos como compromisso oferecer soluções customizadas em logística, transporte, armazenagem e manuseio de cargas, disponibilizando uma estrutura compatível com as suas atuais demandas.
                        </p>
                        <p className='TXTLabel'>
                            Dispondo de uma rede de representantes criteriosamente homologada, possibilitando o atendimento em âmbito regional. Totalmente informatizada com os mais avançados recursos de tecnologia disponíveis, minimizamos qualquer possibilidade de falhas e agilizamos o gerenciamento de informações como pedido de coleta e entrega.
                        </p>
                        <p className='TXTLabel'>
                            Contratar a PostEX Express® significa realizar uma escolha inteligente!
                        </p>
                        <p className='TXTLabel'>
                            Significa ser atendido por profissionais que respiram transporte para oferecer os melhores serviços e soluções à sua empresa.
                        </p>
                        <p className='TXTLabel'>
                            Significa ter o melhor em tecnologia a favor da sua carga e do seu negócio.
                        </p>
                        <img src={QuemSomos} className='imgVolume'/>
                        <Form>
                            <Form.Label className='Franquia2'>
                                Solicite informaçoes, tire sua duvidas a baixo
                            </Form.Label>
                            <Form.Control onChange={val => this.setState({ assunto: val.target.value })} type="text" placeholder="Digite o Assunto"/>
                            <Form.Control onChange={val => this.setState({ conteudo: val.target.value })} as="textarea" className='TXTArea' rows="5" placeholder="O que deseja saber?"/>
                            <p className='TXTLabel'>
                                Para melhor atende-lo, informe seus dados abaixo
                            </p>
                            <Row><Col>
                                <Form.Label className='TXTLabel'>Nome</Form.Label>
                                <Form.Control onChange={val => this.setState({ nome: val.target.value })} type="text"/>
                            </Col><Col>
                                <Form.Label className='TXTLabel'>Email</Form.Label>
                                <Form.Control onChange={val => this.setState({ email: val.target.value })} type="text"/>
                            </Col><Col>
                                <Form.Label className='TXTLabel'>Telefone</Form.Label>
                                <Form.Control  onChange={val => this.setState({ telefone: val.target.value })}type="text"/>
                            </Col></Row>
                        </Form>
                        <div className='mgTop20Meio'>
                            <a href="#" alt="Contato" className='btnSac' onClick={this.enviarEmail}>Enviar</a>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
