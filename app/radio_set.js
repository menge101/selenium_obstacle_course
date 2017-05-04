import React from 'react';
import {Col, Row} from 'react-bootstrap';

//takes no props
export default class RadioSet extends React.Component {
    constructor() {
        super();
        this.state = {selected_btn: null};
        this.setSelection = this.setSelection.bind(this);
    }

    render() {
        return (
            <Row>
                <Col md={1}>
                    <SimpleRadio value="1" checked={this.state.selected_btn === "1"} onChange={this.setSelection}/>
                   <br />
                    <SimpleRadio value="2" checked={this.state.selected_btn === "2"} onChange={this.setSelection}/>
                    <br />
                    <SimpleRadio value="3" checked={this.state.selected_btn === "3"} onChange={this.setSelection}/>
                </Col>
                <Col md={10} mdOffset={1}>
                    <h4>Current Value: {this.state.selected_btn}</h4>
                </Col>
            </Row>
        )
    }

    setSelection(event) {
        console.log(event.currentTarget.value);
        this.setState({selected_btn: event.currentTarget.value});
    }
}

export class SimpleRadio extends React.Component {
    render() {
        return (
            <span>
                <input type="radio" name={this.props.value}
                       value={this.props.value} checked={this.props.checked}
                       onChange={this.props.onChange}/> {this.props.value}
            </span>
        )
    }
}