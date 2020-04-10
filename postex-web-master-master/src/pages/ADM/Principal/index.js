import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { Container, Form, Row, Col, Tabs, Tab } from "react-bootstrap";

import AdmNav from "../../../components/AdmNav";
import AdmSideBar from "../../../components/AdmSideBar";

import Pedidos from "../Gerencial/Pedidos";
import Franquias from "../Gerencial/Franquias";
import Faturas from "../Gerencial/Faturas";
import Lançamentos from "../Gerencial/Lançamentos";

export default class AdmPrincipal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
    };
  }

  componentWillMount() {
    let admcpf = localStorage.getItem("admcpf");
    admcpf = JSON.parse(admcpf);
    let admcnpj = localStorage.getItem("admcnpj");
    admcnpj = JSON.parse(admcnpj);
    console.log(admcpf);
    console.log(admcnpj);
    console.log(localStorage.getItem("token"));
  }

  render() {
    return (
      <div className="home">
        <AdmNav />
        <Row className="m-0">
          <Col md={1} sm={1} xs={1}>
            <AdmSideBar ative={this.state.status} />
          </Col>
          <Switch>
            <Route path="/adm/Principal/Pedidos" component={Pedidos} />
            <Route path="/adm/Principal/Franquias" component={Franquias} />
            <Route path="/adm/Principal/Faturas" component={Faturas} />
            <Route path="/adm/Principal/Lancamentos" component={Lançamentos} />
            {/*
            <Route path="/Cliente/Principal/Indique" component={AdmCadastros} />
            <Route
              path="/Cliente/Principal/Calculadora"
              component={AdmRelatorios}
            />
            <Route
              path="/Cliente/Principal/Carteira"
              component={AdmAdministracao}
            />
            <Route path="/Cliente/Principal/Envios" component={AdmVendedores} />
            <Route
              path="/Cliente/Principal/AgendarEnvios"
              component={AdmSite}
            />
            <Route path="/Cliente/Principal/Perfil" component={AdmAjuda} /> */}
          </Switch>
        </Row>
      </div>
    );
  }
}
