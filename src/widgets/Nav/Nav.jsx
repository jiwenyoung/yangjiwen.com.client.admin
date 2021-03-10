import React from 'react';
import { NavLink as Link } from "react-router-dom";
import { Nav, NavItem } from 'reactstrap';
import "./nav.scss";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.menu = this.props.menu;
    }

    render() {
        return (
            <Nav vertical className="nav_bar">
                {
                    this.menu.map((item) => {
                        return (
                            <NavItem className="nav_item" key={item.label}>
                                <Link to={item.to} activeClassName="active" className="nav_link">
                                    {item.label}
                                </Link>
                            </NavItem>
                        )
                    })
                }
            </Nav>
        );
    }
}

export default Navigation