import React from 'react';
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { Container, Row, Col } from 'reactstrap';
import "./message.scss";

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.children
        }
    }

    static getDerivedStateFromProps(props) {
        return {
            text: props.children
        }
    }

    render() {
        const color = this.props.color;
        const className = this.props.className

        return (
            <Container className={`message ${className}`}>
                <Row>
                    <Col md="12">
                        <BsFillChatSquareDotsFill className={color} />
                        <span>{this.state.text}</span>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Message 