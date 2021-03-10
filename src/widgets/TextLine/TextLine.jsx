import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import "./textline.scss"

class TextLine extends React.Component {
    render() {
        const { onChange, name, onBlur } = this.props;
        const value = this.props.children;

        return (
            <FormGroup row className="social-section-item">
                <Label for={ name }>
                    <strong className="label">
                        { name }
                    </strong>
                </Label>
                <Input name={ name } id={ name }
                    onChange={ onChange }
                    value = { value }
                    onBlur = { onBlur } />
            </FormGroup>
        )
    }
}

export default TextLine