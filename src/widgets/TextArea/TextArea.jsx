import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import "./textarea.scss";

class TextArea extends React.Component {
    render() {
        const { name, onChange } = this.props;
        const value = this.props.children;

        return (
            <FormGroup className="fields-section-item" row>
                <Label for={name}>
                    <strong className="label">{ name }</strong>
                </Label>
                <Input type="textarea" name={name} value={value} onChange={onChange} />
            </FormGroup>
        )
    }
}

export default TextArea