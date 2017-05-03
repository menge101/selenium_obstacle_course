import React from 'react';

// takes no props
export default class Course extends React.Component {
    constructor() {
        super();
        this.state = {text: "Testing..."}
    }

    render() {
        return (
            <div>{this.state.text}</div>
        )
    }
}