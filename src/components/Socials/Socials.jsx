import React from 'react';
import { Form } from 'reactstrap';
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { Container, Row, Col } from 'reactstrap';
import "./socials.scss"

import Title from "../../widgets/Title/Title.jsx"
import TextLine from "../../widgets/TextLine/TextLine.jsx";
import FullLengthButton from "../../widgets/FullLengthButton/FullLengthButton.jsx";
import Message from "../../widgets/Message/Message.jsx";

import Model from "./socials.model.js"

class Socials extends React.Component {
    constructor(props) {
        super(props)
        this.list = Model.list()
        this.state = { message: '' }
        for (let item of this.list) {
            this.state[item] = ''
        }
    }

    async componentDidMount() {
        this.list.forEach(async (element) => {
            const value = await Model.get(element)
            this.setState({ [element]: value })
        })
    }

    /**
     * Handlers
     */
    handlers() {
        return {
            trace: (value, key) => {
                this.setState({ [key]: value })
            },
            submit: async () => {
                //Update fields in this.list Array to database
                const requests = []
                Object.keys(this.state).forEach((element) => {
                    if (this.list.includes(element)) {
                        requests.push(Model.update(element, this.state[element]))
                    }
                })
                const responses = await Promise.all(requests)
                const result = responses.every((value)=>{ return value })

                //show message
                if (result === true){
                    this.setState({ message: 'The social entries have been saved...' })
                }else{
                    this.setState({ message: 'Something wrong...' })
                }
            }
        }
    }

    /**
     * Views
     */
    render() {
        return (
            <Form>
                <Container fluid>
                    <Row>
                        <Col>
                            <Title icon={<BsFillChatSquareDotsFill />} title="Social Media" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="10">
                            <section className="social-section">
                                {
                                    this.list.map((item) => {
                                        return (
                                            <TextLine name={item} key={item} onChange={
                                                (event) => { this.handlers().trace(event.target.value, item) }
                                            }>
                                                { this.state[item] }
                                            </TextLine>
                                        )
                                    })
                                }
                            </section>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="8">
                            <Message color="text-primary">
                                {this.state.message}
                            </Message>
                        </Col>
                        <Col md="2">
                            <FullLengthButton color="primary" onClick={this.handlers().submit}>
                                Submit
                            </FullLengthButton>
                        </Col>
                    </Row>
                </Container>
            </Form>
        );
    }
}

export default Socials