import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Switch, Route } from "react-router-dom";

import Login from "../Login/Login.jsx";
import Logout from "../Logout/Logout.jsx";
import SideBar from "../Sidebar/Sidebar.jsx";
import Socials from "../Socials/Socials.jsx";
import Fields from "../Fields/Fields.jsx";
import Posts from "../Posts/Posts.jsx";

class Layout extends React.Component {
    isLogin() {
        const login = sessionStorage.getItem("login");
        if (login === false || login === null) {
            return false
        } else {
            return true
        }
    }

    render() {
        if (this.isLogin()) {
            return (
                <Container fluid className="vh-100 no-gutters">
                    <Row className="vh-100">
                        <Col md="2" className="h-100" style={{ "padding": 0 }}>
                            <SideBar />
                        </Col>
                        <Col md="10">
                            <Switch>
                                <Route path="/layout/socials" component={Socials} />
                                <Route path="/layout/fields" component={Fields} />
                                <Route path="/layout/posts" component={Posts} />
                                <Route path="/layout/logout" component={Logout} />
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            )
        } else {
            return (
                <Login />
            )
        }
    }
}

export default Layout