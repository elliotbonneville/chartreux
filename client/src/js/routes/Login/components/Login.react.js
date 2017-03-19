import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

import auth from '~/data/auth';

export default function Login() {
    return (
        <div>
            <h2>Login</h2>
            <ButtonToolbar>
                <Button bsStyle="primary" onClick={auth.login}>Login</Button>
            </ButtonToolbar>
        </div>
    );
}
