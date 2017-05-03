import React from 'react';
import {Button} from 'react-bootstrap';

// takes no props
export default class ClickCounter extends React.Component {
    constructor() {
        super();
        this.state = {clicks: 0}
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleClick}>Click Me</Button>
                <h3>You have clicked {this.state.clicks} time(s).</h3>
            </div>
        )
    }

    handleClick() {
        let current_clicks = this.state.clicks + 1;
        this.setState({clicks: current_clicks})
        console.log("Click handled.")
    }
}