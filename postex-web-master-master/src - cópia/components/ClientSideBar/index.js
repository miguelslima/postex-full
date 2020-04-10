import React, { Component } from "react";
import { Navbar, Nav, Row, Col, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import "./styles.css";
import CheckFile from "../../Assets/img/CheckFile.png"
import Wallet from '../../Assets/img/Wallet.png'
import Pack from '../../Assets/img/Pack.png'
import Home from '../../Assets/img/Home.png'
import Shopping from '../../Assets/img/Shopping.png'
import Calculator from '../../Assets/img/Calculator.png'
import Integration from '../../Assets/img/Integration.png'
import Gear from '../../Assets/img/Gear.png'
import Chat from '../../Assets/img/Chat.png'


export default class ClientSideBar extends Component {
  render() {
    return (
      <div  className='cltSide'>

        <OverlayTrigger
        key='Home'
          placement='right'
          overlay={
            <Tooltip id={`tooltip-right`}>
              <strong>Home</strong>.
   </Tooltip>
          }
        >
          <a href='/Cliente/Home' className={this.props.ative === 'home' ?'cltLinkSideAtive' :'cltLinkSide'}><img src={Home} className='navIcon1'  /></a>
        </OverlayTrigger>
        <OverlayTrigger
        key='Calculadora'
          placement='right'
          overlay={
            <Tooltip id={`tooltip-right`}>
              <strong>Calculadora</strong>.
   </Tooltip>
          }
        >
          <a href='/Cliente/Calculadora' className={this.props.ative === 'calculadora' ?'cltLinkSideAtive' :'cltLinkSide'} eventKey="link-1"><img src={Calculator} className='navIcon1'  /></a>

        </OverlayTrigger>
        <OverlayTrigger
        key='Envios'
          placement='right'
          overlay={
            <Tooltip id={`tooltip-right`}>
              <strong>Envios</strong>.
   </Tooltip>
          }
        >
          <a href='/Cliente/Envios' className={this.props.ative === 'envios' ?'cltLinkSideAtive' :'cltLinkSide'} eventKey="link-2"><img src={Pack} className='navIcon1'  /></a>
        </OverlayTrigger>
        <OverlayTrigger
          key='Carteira'
          placement='right'
          overlay={
            <Tooltip id={`tooltip-right`}>
              <strong>Carteira</strong>.
   </Tooltip>
          }
        >
          <a href='/Cliente/Carteira' className={this.props.ative === 'carteira' ?'cltLinkSideAtive' :'cltLinkSide'} eventKey="link-2"><img src={Wallet} className='navIcon1'  /></a>
        </OverlayTrigger>
        <OverlayTrigger
        key='Postagens'
          placement='right'
          overlay={
            <Tooltip id={`tooltip-right`}>
              <strong>Postagens Conferidas</strong>.
   </Tooltip>
          }
        >
          <a href='/Cliente/Post' className={this.props.ative === 'post' ?'cltLinkSideAtive' :'cltLinkSide'} eventKey="link-2"><img src={CheckFile} className='navIcon1'  /></a>
        </OverlayTrigger>
        <OverlayTrigger
        key='Vendas'
          placement='right'
          overlay={
            <Tooltip id={`tooltip-right`}>
              <strong>Minhas Vendas</strong>
   </Tooltip>
          }
        >
          <a href='/Cliente/Vendas' className={this.props.ative === 'vendas' ?'cltLinkSideAtive' :'cltLinkSide'} eventKey="link-2"><img src={Shopping} className='navIcon1'  /></a>
        </OverlayTrigger>
        <OverlayTrigger
        key='Integracoes'
          placement='right'
          overlay={
            <Tooltip id={`tooltip-right`}>
              <strong>Integrações</strong>.
   </Tooltip>
          }
        >
          <a href='/Cliente/Integracao' className={this.props.ative === 'int' ?'cltLinkSideAtive' :'cltLinkSide'} eventKey="link-2"><img src={Integration} className='navIcon1'  /></a>
        </OverlayTrigger>
        <OverlayTrigger
        key='Gerenciar'
          placement='right'
          overlay={
            <Tooltip id={`tooltip-right`}>
              <strong>Gerenciar</strong>.
   </Tooltip>
          }
        >
          <a href='/Cliente/Gerenciar' className={this.props.ative === 'gerenciar' ?'cltLinkSideAtive' :'cltLinkSide'} eventKey="link-2"><img src={Gear} className='navIcon1'  /></a>
        </OverlayTrigger>
        <OverlayTrigger
        key='Suprte'
          placement='right'
          overlay={
            <Tooltip id={`tooltip-right`}>
              <strong>Suporte</strong>.
   </Tooltip>
          }
        >
          <a href='/Cliente/Suporte' className={this.props.ative === 'suport' ?'cltLinkSideAtive' :'cltLinkSide'} eventKey="link-2"><img src={Chat} className='navIcon1'  /></a>
        </OverlayTrigger>









      </div>
    )
  }
}