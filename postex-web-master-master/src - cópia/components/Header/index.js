import React , {Component} from "react";
import {Navbar , Nav , Row , Col , Container} from 'react-bootstrap';
import "./styles.css";
import Logo from "../../Assets/img/logopostexmin.png"
import iconFace from '../../Assets/img/iconFace.png'
import iconGoogle from '../../Assets/img/iconGoogle.png'
import iconLinkedin from '../../Assets/img/iconLinkedin.png'
import Search from '../../Assets/img/Search.png'


export default class Header extends Component {
    render () {
        return (
            <div className='NavDiv'>
                {/*<Row className='SocNav'>*/}
                {/*    <Col xs={5} sm={9}></Col>*/}
                {/*    <Col xs={7} sm={2} className='linha'>*/}

                {/*        <a href="https://www.facebook.com/postex.sbs?ref=br_rs" alt="Facebook" target="_blank"><img*/}
                {/*            src={iconFace} className='socialIcons'/></a>*/}
                {/*        <a href="https://www.facebook.com/postex.sbs?ref=br_rs" alt="Facebook" target="_blank"><img*/}
                {/*            src={iconGoogle} className='socialIcons'/></a>*/}
                {/*        <a href="https://www.facebook.com/postex.sbs?ref=br_rs" alt="Facebook" target="_blank"><img*/}
                {/*            src={iconLinkedin} className='socialIcons'/></a>*/}
                {/*    </Col>*/}

                {/*</Row>*/}
                <Navbar collapseOnSelect expand="lg" className='navB'>
                    <Container className='navCont'>
                        <div>

                            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Brand href="#home">
                                <img src={Logo} className='logo'/>
                            </Navbar.Brand>

                        </div>

                        <Navbar.Collapse id="responsive-navbar-nav" className='bgCollapse'>


                            <Nav.Link className={this.props.ative === 'Home'? 'navAtive' : 'navBLink'} href="/"><span
                                className='center'>HOME</span></Nav.Link>
                            <Nav.Link className={this.props.ative === 'Sac'? 'navAtive' : 'navBLink'} href="/Sac"><span
                                className='center'>SAC</span> </Nav.Link>
                            <Nav.Link className={this.props.ative === 'Franqueado'? 'navAtive' : 'navBLink'}
                                      href="/Franqueado"><span className='center'>SEJA FRANQUEADO </span></Nav.Link>
                            <Nav.Link className={this.props.ative === 'Rastreamento'? 'navAtive' : 'navBLink'}
                                      href="/Rastreamento"><span className='center'>RASTREAMENTO </span></Nav.Link>
                            <Nav.Link className={this.props.ative === 'Cliente'? 'navAtive' : 'navBLink'}
                                      href="/Cliente"><span className='center'>ÁREA CLIENTE</span> </Nav.Link>
                            <Nav.Link className={this.props.ative === 'Restrita'? 'navAtive' : 'navBLink'}
                                      href="/Restrita"><span className='center'>ÁREA RESTRITA</span> </Nav.Link>


                        </Navbar.Collapse>
                    </Container>

                </Navbar>
            </div>
        )
    }
}

