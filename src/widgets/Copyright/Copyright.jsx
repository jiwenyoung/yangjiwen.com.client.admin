import React from 'react';
import "./copyright.scss"

class Copyright extends React.Component {
    render() {
        return (
            <span className="copyright">
                Copyright@{new Date().getFullYear()}
            </span>
        );
    }
}

export default Copyright;