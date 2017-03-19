import React, { PropTypes } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default function CoreLayout(props) {
    let children = null;
    if (props.children) {
        // sends auth instance to children
        children = React.cloneElement(props.children, {
            auth: props.route.auth,
        });
    }

    return (
        <Jumbotron>
            {children}
        </Jumbotron>
    );
}

CoreLayout.contextTypes = {
    router: PropTypes.object,
};

CoreLayout.propTypes = {
    children: PropTypes.object,
    route: PropTypes.object,
};

CoreLayout.defaultProps = {
    children: {},
    route: {},
};
