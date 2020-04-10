import React, { Component } from "react";
import { Navbar, Nav, Row, Col, Container, NavDropdown } from 'react-bootstrap';
import "./styles.css";
import Logo from "../../Assets/img/logopostexmin.png"
import iconFace from '../../Assets/img/iconFace.png'
import Cart from '../../Assets/img/Cart.png'
import Not from '../../Assets/img/Not.png'
import Calculator from '../../Assets/img/Calculator.png'


export default class ClientNav extends Component {
    render() {
        return (
            <Navbar expand="lg" className='cltNav' variant='dark'>
                <Container>
                    <Navbar.Brand href="/Cliente/Home"><img src={Logo} className='logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='cltLink' href="#home">Saldo: [Valor]</Nav.Link>
                        <Nav.Link className='cltLink' href="#link">Link</Nav.Link>
                        <Nav.Link className='cltLink' href="#link"><img src={Calculator} className='navIcon' /></Nav.Link>
                        <Nav.Link className='cltLink' href="#link"><img src={Not} className='navIcon' /></Nav.Link>
                        <Nav.Link className='cltLink' href="#link"><img src={Cart} className='navIcon' /></Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}