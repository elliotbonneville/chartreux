import React, { PropTypes } from 'react';
import { Col } from 'react-bootstrap';

import { serializeField, deserializeField } from '~/data/models/fields';

export default class RecordField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: deserializeField(this.props.field, props.value),
        };
    }

    componentWillReceiveProps(nextProps) {
        const { value } = nextProps;
        if (typeof value !== 'undefined') {
            this.setState({
                value: deserializeField(this.props.field, value),
            });
        }
    }

    onBlur = (event) => {
        const { field, fieldName } = this.props;
        this.props.modifyRecord(fieldName, serializeField(field, event.target.value));
    };

    onChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    }

    render() {
        const {
            editing,
            field,
            fieldName,
        } = this.props;

        if (typeof fieldName === 'undefined') return null;

        const valueComponent = editing
            ? <input type="text" value={this.state.value} onBlur={this.onBlur} onChange={this.onChange} />
            : this.state.value;

        return (
            <Col xs={12} md={6} style={{ height: 35 }}>
                <strong>{field[1]}</strong>: {valueComponent}
            </Col>
        );
    }
}

RecordField.propTypes = {
    editing: PropTypes.bool,
    field: PropTypes.array.isRequired,
    fieldName: PropTypes.string.isRequired,
    value: PropTypes.string,
    modifyRecord: PropTypes.func,
};

RecordField.defaultProps = {
    editing: false,
    value: '',
    modifyRecord: () => {},
};
