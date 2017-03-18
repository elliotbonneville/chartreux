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
            <h2>
                <img alt="" src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg" />
            </h2>
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
