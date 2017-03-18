import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

export default function Login(props) {
    const { auth } = props;
    return (
        <div>
            <h2>Login</h2>
            <ButtonToolbar>
                <Button bsStyle="primary" onClick={auth.login.bind(this)}>Login</Button>
            </ButtonToolbar>
        </div>
    );
}
