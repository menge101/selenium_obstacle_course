import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';

// takes no props
export default class ClickCounter extends React.Component {
    constructor() {
        super();
        this.state = {clicks: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <Row>
                <Col md={2}>
                    <Button bsSize="large" bsStyle="success" onClick={this.handleClick}>Click Me</Button>
                </Col>
                <Col md={10} >
                    <h4>You have clicked {this.state.clicks} time(s).</h4>
                </Col>
            </Row>
        )
    }

    handleClick() {
        let current_clicks = this.state.clicks + 1;
        this.setState({clicks: current_clicks});
        console.log("Click handled.");
    }
}