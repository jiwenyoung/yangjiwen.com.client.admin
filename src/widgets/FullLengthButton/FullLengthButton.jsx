import React from 'react';
import { Button } from 'reactstrap';
import "./fullLengthButton.scss"

class FullLengthButton extends React.Component {
    constructor(props) {
        super(props)
        this.color = this.props.color;
        this.text = this.props.children;
        this.handler = this.props.onClick;
    }

    render() {
        return (
            <Button color={this.color} onClick={this.handler}>
                { this.props.children }
            </Button>
        )
    }
}

export default FullLengthButton