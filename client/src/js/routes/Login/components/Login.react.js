import React, { PropTypes } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

import AuthService from '~/utils/AuthService';

export default function Login(props) {
    const { auth } = props;
    return (
        <div>
            <h2>Login</h2>
            <ButtonToolbar>
                <Button bsStyle="primary" onClick={auth.login}>Login</Button>
            </ButtonToolbar>
        </div>
    );
}

Login.propTypes = {
    auth: PropTypes.instanceOf(AuthService).isRequired,
};
