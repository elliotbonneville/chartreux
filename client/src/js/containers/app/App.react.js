import React, { PropTypes } from 'react';
import { Router } from 'react-router';

export default function App(props) {
    return (
        <div style={{ height: '100%' }}>
            <Router
                routes={props.routes}
                history={props.history}
            />
        </div>
    );
}

App.contextTypes = {
    router: PropTypes.object,
};

App.propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
};
