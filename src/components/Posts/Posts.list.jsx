import React from 'react';
import { BsBookmarksFill } from "react-icons/bs";
import { Container, Row, Col } from 'reactstrap';
import { withRouter } from "react-router-dom";
import "./posts.scss";

import Articles from "../../widgets/Articles/Articles.jsx"
import Title from "../../widgets/Title/Title.jsx"
import FullLengthButton from "../../widgets/FullLengthButton/FullLengthButton.jsx"
import Pager from "../../widgets/Pager/Pager.jsx";

import Model from "./posts.model.js"

class PostList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            page: 1,
            pages: 1,
        }
        this.pagesize = sessionStorage.getItem("pagesize") || 10
    }

    async componentDidMount() {
        await this.handlers().load(this.state.page)
    }

    handlers = () => {
        return {
            load: async (page) => {
                const list = await Model.list(page, this.pagesize);
                await this.setState({ list: list })
                const pages = await Model.pages(this.pagesize);
                await this.setState({ pages: pages.pages })
            },
            navigate: (path) => {
                return () => {
                    this.props.history.push(path)
                }
            },
            remove: async (id) => {
                await Model.remove(id);
                if (this.state.list.length === 1) {
                    let page = this.state.page - 1;
                    await this.setState({ page: page })
                    await this.handlers().load(page);
                }
            },
            page: async () => {
                const info = await Model.pages(1, this.pagesize)
                return info;
            },
            trunpage: () => {
                return {
                    prev: async () => {
                        if (this.state.page !== 1) {
                            await this.setState((state) => {
                                return { page: state.page - 1 }
                            })
                            await this.handlers().load(this.state.page)
                        }
                    },
                    next: async () => {
                        if (this.state.page <= this.state.pages) {
                            await this.setState((state) => {
                                return { page: state.page + 1 }
                            })
                            await this.handlers().load(this.state.page)
                        }
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
                        <Title icon={<BsBookmarksFill />} title="Posts" />
                    </Col>
                </Row>
                <Row>
                    <Col md="10">
                        <section className="posts-section">
                            <Articles list={this.state.list} remove={this.handlers().remove} />
                        </section>
                    </Col>
                </Row>
                <Row>
                    <Col md="8">
                        <Pager page={this.state.page}
                            pages={this.state.pages}
                            next={this.handlers().trunpage().next}
                            prev={this.handlers().trunpage().prev} />
                    </Col>
                    <Col md="2">
                        <FullLengthButton color="primary" onClick={this.handlers().navigate('/layout/posts/create')}>
                            Add
                        </FullLengthButton>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(PostList)