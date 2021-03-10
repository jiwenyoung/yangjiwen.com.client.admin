import React from 'react';
import { BsTools } from "react-icons/bs";
import "./sidebar.scss";

import Logo from "../../widgets/Logo/Logo.jsx";
import Navigation from "../../widgets/Nav/Nav.jsx";
import Copyright from "../../widgets/Copyright/Copyright.jsx";

class SideBar extends React.Component {
    render() {
        const menus = [
            {
                "to": "/layout/socials",
                "label": "Socials"
            },
            {
                "to": "/layout/fields",
                "label": "Fields"
            },
            {
                "to": "/layout/posts",
                "label": "Posts"
            },
            {
                "to": "/layout/logout",
                "label" : "Logout"
            }
        ]

        return (
            <section className="sidebar">
                <Logo text="CMS" icon={<BsTools/>}/>
                <Navigation menu={menus} />
                <Copyright/>
            </section>
        )
    }
}

export default SideBar