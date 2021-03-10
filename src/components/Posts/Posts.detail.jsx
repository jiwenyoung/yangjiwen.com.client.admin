import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BsBookmarksFill } from "react-icons/bs";
import { withRouter } from "react-router-dom";
import "./posts.scss";

import Title from "../../widgets/Title/Title.jsx";
import TextLine from "../../widgets/TextLine/TextLine.jsx";
import { Button, ButtonGroup } from 'reactstrap';
import Message from "../../widgets/Message/Message.jsx"
import Model from './posts.model.js';

class PostDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "",
            title: "",
            folder: ""
        }
        if (this.props.match.params.id) {
            this.status = "modify";
            this.title = "Modify Post";
            this.id = this.props.match.params.id;
        } else {
            this.status = "create";
            this.title = "Create Post";
        }
    }

    async componentDidMount() {
        if (this.status === "modify") {
            const data = await Model.get(this.id)
            if (data !== false) {
                this.setState({
                    title: data.title,
                    folder: data.folder
                })
            } else {
                await this.setState({ message: 'Cannot fetch data...' })
            }
        }
    }

    handlers = () => {
        return {
            trace: (value, key) => {
                this.setState({ [key]: value })
            },
            fill: () => {
                const name = this.state.title
                let defaultFolder = name.split(" ").join("-").toLowerCase()
                if (this.state.folder === '') {
                    this.setState({ folder: defaultFolder })
                }
            },
            goback: (page) => {
                return () => {
                    this.props.history.push(`/layout/posts/page/${page}`)
                }
            },
            submit: async () => {
                if (this.status === "modify") {
                    const isUpdated = await Model.modify(this.id, {
                        title: this.state.title,
                        folder: this.state.folder
                    })
                    if (isUpdated) {
                        await this.setState({ message: "The Post has been updated..." })
                    } else {
                        await this.setState({ message: "Something went wrong..." })
                    }
                } else if (this.status === "create") {
                    const isCreated = await Model.create({
                        title: this.state.title,
                        folder: this.state.folder
                    })
                    if (isCreated) {
                        await this.setState({ message: "The Post has been created..." })
                    } else {
                        await this.setState({ message: "Something went wrong..." })
                    }
                }
            }
        }
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <Title icon={<BsBookmarksFill />} title={this.title} />
                    </Col>
                </Row>
                <Row>
                    <Col md="10">
                        <section className="posts-detail-section">
                            <TextLine name="title"
                                onChange={(event) => { this.handlers().trace(event.target.value, 'title') }}
                                onBlur={this.handlers().fill}>
                                {this.state.title}
                            </TextLine>
                            <TextLine name="folder" onChange={(event) => { this.handlers().trace(event.target.value, 'folder') }}>
                                {this.state.folder}
                            </TextLine>
                        </section>
                    </Col>
                </Row>
                <Row>
                    <Col md="8">
                        <Message color="text-primary">
                            {this.state.message}
                        </Message>
                    </Col>
                    <Col md="2" className="submit-buttons-group">
                        <ButtonGroup>
                            <Button color="secondary" onClick={this.handlers().goback(1)}>
                                Return
                            </Button>
                            <Button color="primary" onClick={this.handlers().submit}>
                                Submit
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(PostDetail)