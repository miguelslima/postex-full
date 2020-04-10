import React, { Component } from "react";
import Header from "../../components/Header";
import { Container, Form, Row, Col, Tabs, Tab } from "react-bootstrap";
import "./styles.css";
import InputMask from "react-input-mask";
export default class Input extends Component {
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
		if (!this.props.value) {
			// console.log(this.props.value);
			this.setState({
				focus: false,
				value: this.props.value
			});
		}
	};
	render() {
		return (
			<div className="left">
				<span className={this.props.error ? "labelfloatError" : this.state.focus ? "labelfloatAtive" : "labelfloat"}>{this.props.label}</span>
				<br />
				<InputMask disabled={this.props.disabled} type={this.props.Type} onFocus={this.onFocus} mask={this.props.mask} placeholder={this.props.placeholder} onBlur={this.onBlur} required={this.props.required} minLength={this.props.minlength} maxLength={this.props.maxlength} onChange={(val) => this.props.FValue(this.props.t, val.target.value)} value={this.props.Value} className={this.props.error ? "inputfloatError" : "inputfloat"} />
				<span className="error">{this.props.Merror}</span>
			</div>
		);
	}
}
