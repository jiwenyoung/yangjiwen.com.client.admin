import React from 'react';
import { Input, Button } from 'reactstrap';
import { withRouter } from "react-router-dom";
import Model from './login.model.js';
import Message from "../../widgets/Message/Message.jsx"
import "./login.scss"

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            password: "",
            message: "message"
        }
    }

    handers() {
        return {
            trace: (value) => {
                this.setState({ password: value })
            },
            login: async () => {
                const password = this.state.password;
                const isLogined = await Model.login(password)
                if (isLogined) {
                    sessionStorage.setItem("login", true)
                    this.props.history.push('/layout/socials')
                } else {
                    await this.setState({ message: 'password is not correct' })
                }
            }
        }
    }

    render() {
        return (
            <section className="login-container">
                <section className="login-box">
                    <Input type="password" placeholder="password"
                        className="login-input"
                        value={this.state.password}
                        onChange={(event) => { this.handers().trace(event.target.value) }} />
                    <Button color="primary" onClick={() => { this.handers().login() }}>
                        LOGIN
                    </Button>
                    <Message color="text-primary" className="login-message">
                        {this.state.message}
                    </Message>
                </section>
            </section>
        )
    }
}

export default withRouter(Login)