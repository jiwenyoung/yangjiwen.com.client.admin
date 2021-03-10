import React from 'react';
import { Table } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import { withRouter } from "react-router-dom";
import "./articles.scss";

class Articles extends React.Component {
    constructor(props) {
        super(props)
        this.remove = this.props.remove
    }

    handlers = () => {
        return {
            navigate: (path) => {
                return () => {
                    this.props.history.push(path)
                }
            },
            remove: async (id) => {
                await this.remove(id)
            }
        }
    }

    render() {
        let { list } = this.props;
        if(!list){
            list = []
        }

        return (
            <Table bordered hover className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((post) => {
                            return (
                                <tr key={post.id} className="post-table-body">
                                    <td>{post.title}</td>
                                    <td>
                                        <ButtonGroup>
                                            <Button color="primary" onClick={this.handlers().navigate(`/layout/posts/id/${post.id}`)}>
                                                Modify
                                            </Button>
                                            <Button color="danger" onClick={() => { this.handlers().remove(post.id) }}>
                                                Remove
                                            </Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        )
    }
}

export default withRouter(Articles)