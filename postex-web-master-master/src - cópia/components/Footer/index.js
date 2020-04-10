import React, {Component} from "react";
import { Navbar,Nav,Row,Col, Container, NavDropdown} from 'react-bootstrap';
import "./styles.css";
import Logo from "../../Assets/img/logopostexmin.png"
import iconFace from '../../Assets/img/iconFace.png'
import iconGoogle from '../../Assets/img/iconGoogle.png'
import iconLinkedin from '../../Assets/img/iconLinkedin.png'
import Calculator from '../../Assets/img/Calculator.png'


export default class Footer extends Component {
    render() {
        return( 
            <Navbar expand="lg" className='footer' variant='dark'>
                <Container>
  
  <Navbar.Collapse >
  <Nav.Link className='footLink' href="https://icons8.com/">Icones de icons8</Nav.Link>
  </Navbar.Collapse>
  </Container>
</Navbar>
        )}}