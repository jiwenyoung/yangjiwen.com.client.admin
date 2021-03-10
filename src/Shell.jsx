import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login/Login";
import Layout from "./components/Layout/Layout";

class Shell extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/layout" component={Layout} />
                    <Redirect path='/' to="/login" />
                </Switch>
            </Router>
        )
    }
}

export default Shell