import React , {Component} from "react";
import Header from '../../../components/Header'
import Logo from "../../../Assets/img/logopostex.png"
import "./styles.css"
import { Row,Col } from "react-bootstrap";


export default class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: '',
            nome:'',
        };

    }


    handleRegister() {
        alert('Em Fase de style');
    }

    render () {
        return (
            <div >
                <Header ative='Home'/>
            <div className='fundoLog'>

<Row className='FiltroFundo'>
<Col className='center'>
<img src={Logo}/>
</Col>
<Col className='center'>
<div className="login">
<form className="hh">
                                <label className="titulo">Área de Acesso</label>
                                <label className="usuario">Usuario</label>
                                <input className="input" type="text" name="Usuario"/>
                                <label className="senha">Senha</label>
                                <input className="input" type="text" name="Senha"/>
                                <div className="sub">
                                    <input className="submit" type="submit" value="Entrar" onClick={this.handleRegister}/>
                                    <input className="submit2" type="submit" value="Cadastre-se" onClick={this.handleRegister}/>
                                </div>
                                <label className="esqueci">Esqueci minha senha</label>
                            </form>
                            </div>
</Col>
</Row>


            </div>
            </div>
        )
    }
}
