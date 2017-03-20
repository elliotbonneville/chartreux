import React, { PropTypes } from 'react';

export default function CoreLayout(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}

CoreLayout.propTypes = {
    children: PropTypes.object,
};

CoreLayout.defaultProps = {
    children: {},
};
