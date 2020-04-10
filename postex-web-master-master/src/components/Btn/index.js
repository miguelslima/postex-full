import React, { Component } from "react";
import Header from "../../components/Header";
import { Container, Form, Row, Col, Tabs, Tab } from "react-bootstrap";
import "./styles.css";

export default class Btn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			focus: false,
			value: null
		};
	}
	onFocus = () => {
		this.setState({
			focus: true
		});
	};
	onBlur = () => {
		if (!this.props.Value) {
			this.setState({
				focus: false
			});
		}
		console.log(this.state.value);
	};
	render() {
		return (
			<button className="btn-orange" onClick={this.props.acao}>
				{this.props.label}
			</button>
		);
	}
}
