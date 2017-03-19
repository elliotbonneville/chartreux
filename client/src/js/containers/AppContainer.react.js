import React, { PropTypes } from 'react';
import { Router } from 'react-router';

export default function AppContainer(props) {
    return (
        <div style={{ height: '100%' }}>
            <Router
                routes={props.routes}
                history={props.history}
            />
        </div>
    );
}

AppContainer.contextTypes = {
    router: PropTypes.object,
};

AppContainer.propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
};
