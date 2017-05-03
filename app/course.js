import React from 'react';
import {Col, Jumbotron} from 'react-bootstrap';
import ClickCounter from './click_counter';

// takes no props
export default class Course extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div id="everything">
                <Col md={10} mdOffset={1}>
                    <Jumbotron>
                        <h1>Welcome!</h1>
                        <p>This is the selenium obstacle course.  Really just a pile of meaningless UI components.  But we will use this to demonstrate the abilities of Selenium Web Driver.</p>
                    </Jumbotron>
                </Col>
                <Col md={6} mdOffset={3}>
                    <ClickCounter/>
                </Col>
            </div>
        )
    }
}