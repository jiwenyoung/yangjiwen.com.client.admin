import React from 'react';
import "./logo.scss";

class Logo extends React.Component {
    constructor(props) {
        super(props)
        this.text = this.props.text;
        this.icon = this.props.icon;
    }

    render() {
        return (
            <h1 className="logo">
                <i>{this.icon}</i>
                <span>{this.text}</span>
            </h1>
        );
    }
}

export default Logo