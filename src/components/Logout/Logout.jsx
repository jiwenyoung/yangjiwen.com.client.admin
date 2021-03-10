import React from 'react';
import { Container, Row, Col, Alert, Button } from 'reactstrap';
import { withRouter } from "react-router-dom";
import Title from "../../widgets/Title/Title.jsx";
import { BsBoxArrowInRight } from "react-icons/bs";
import Model from "./logout.model.js";

class Logout extends React.Component {
    handlers = ()=>{
        return {
            logout : async ()=>{
                const isLogout = await Model.logout();
                if(isLogout){
                    sessionStorage.removeItem('login');
                    this.props.history.push("/login");
                }
            }
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Title icon={<BsBoxArrowInRight />} title="Log Out" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Alert color="primary">
                            Log Out Here ...
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ size: 3, offset: 9 }}>
                        <Button color="primary" onClick={ this.handlers().logout }>
                            Logout
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(Logout)