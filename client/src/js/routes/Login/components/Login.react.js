import React from 'react';
import {
    ButtonToolbar,
    Button,
    Grid,
    Row,
    Col,
} from 'react-bootstrap';

import auth from '~/data/auth';

export default function Login() {
    return (
        <div>
            <Grid>
                <Row>
                    <Col xs={6} md={4} />
                    <Col xs={6} md={4}>
                        <h2>Login</h2>
                        <ButtonToolbar>
                            <Button bsStyle="primary" onClick={auth.login}>Login</Button>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}
