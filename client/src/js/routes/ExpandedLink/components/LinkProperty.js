import React, { PropTypes } from 'react';

import { Col } from 'react-bootstrap';

export default function LinkProperty(props) {
    const {
        editing,
        property,
        value,
        modifyLink,
    } = props;

    if (typeof property === 'undefined') return null;

    const onChange = event => modifyLink(property, event.target.value);

    const valueComponent = editing
        ? <input type="text" value={value} onChange={onChange} />
        : value;

    return (
        <Col xs={12} md={6}>
            {property}: {valueComponent}
        </Col>
    );
}

LinkProperty.propTypes = {
    editing: PropTypes.bool,
    property: PropTypes.string.isRequired,
    value: PropTypes.string,
    modifyLink: PropTypes.func,
};

LinkProperty.defaultProps = {
    editing: false,
    value: '',
    modifyLink: () => {},
};
