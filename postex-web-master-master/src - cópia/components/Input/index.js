import React, { Component } from "react";
import Header from '../../components/Header'
import { Container, Form, Row, Col, Tabs, Tab } from 'react-bootstrap';
import "./styles.css"

export default class Input extends Component {
    constructor(props){
        super(props)
    this.state = {
        focus: false,
        value: null
    }}
    onFocus = () => {
        this.setState({
            focus: true
        })
    }
    onBlur = () => {
        if(!this.props.Value){
            this.setState({
            focus: false})
        }
        console.log(this.state.value)
    }
    render() {
        return ( 
            <div className='left'>
                <span className={this.props.error ? 'labelfloatError' : (this.state.focus ? 'labelfloatAtive' : 'labelfloat')}>{this.props.label}</span><br />
                <input type={this.props.Type} onFocus={this.onFocus} onBlur={this.onBlur} onChange={(val) => this.props.FValue(this.props.t ,val.target.value)} value={this.props.Value}   className={this.props.error ? 'inputfloatError' :'inputfloat'} />
                <span className='error'>{this.props.Merror}</span>
            </div>
 )
    }
}