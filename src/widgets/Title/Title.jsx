import React from 'react';
import "./title.scss";

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.title = this.props.title;
        this.icon = this.props.icon;
    }

    render() {
        return (
            <h2 className="title">
                <i>
                    {this.icon}
                </i>
                <span>
                    {this.title}
                </span>
            </h2>
        )
    }
}

export default Title