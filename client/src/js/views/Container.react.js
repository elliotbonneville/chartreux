import React, { PropTypes } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default function Container(props) {
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

Container.contextTypes = {
    router: PropTypes.object,
};

Container.propTypes = {
    children: PropTypes.object,
    route: PropTypes.object,
};

Container.defaultProps = {
    children: {},
    route: {},
};
