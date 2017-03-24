import React, { PropTypes } from 'react';

import { Col } from 'react-bootstrap';

export default function RecordField(props) {
    const {
        editing,
        property,
        value,
        modifyRecord,
    } = props;

    if (typeof property === 'undefined') return null;

    const onChange = event => modifyRecord(property, event.target.value);

    const valueComponent = editing
        ? <input type="text" value={value} onChange={onChange} />
        : value;

    return (
        <Col xs={12} md={6} style={{ height: 35 }}>
            <strong>{property}</strong>: {valueComponent}
        </Col>
    );
}

RecordField.propTypes = {
    editing: PropTypes.bool,
    property: PropTypes.string.isRequired,
    value: PropTypes.string,
    modifyRecord: PropTypes.func,
};

RecordField.defaultProps = {
    editing: false,
    value: '',
    modifyRecord: () => {},
};
