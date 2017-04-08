import React, { PropTypes } from 'react';
import moment from 'moment';

import { Col } from 'react-bootstrap';

export default function RecordField(props) {
    const {
        editing,
        displayProperty,
        property,
        modifyRecord,
    } = props;

    let { value } = props;

    const date = moment(value, 'YYYY-MM-DDT00:00:00.000Z', true);

    if (date.isValid()) {
        value = date.format('MM/DD/YYYY');
    }

    if (typeof property === 'undefined') return null;

    const onChange = event => modifyRecord(property, event.target.value);
    const valueComponent = editing
        ? <input type="text" value={value} onChange={onChange} />
        : value;

    return (
        <Col xs={12} md={6} style={{ height: 35 }}>
            <strong>{displayProperty}</strong>: {valueComponent}
        </Col>
    );
}

RecordField.propTypes = {
    displayProperty: PropTypes.string.isRequired,
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
