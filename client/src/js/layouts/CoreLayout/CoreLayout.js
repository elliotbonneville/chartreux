import React, { PropTypes } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default function CoreLayout(props) {
    return (
        <Jumbotron>
            {props.children}
        </Jumbotron>
    );
}

CoreLayout.propTypes = {
    children: PropTypes.object,
};

CoreLayout.defaultProps = {
    children: {},
};
