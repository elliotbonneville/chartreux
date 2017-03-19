import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

import AuthService from '~/utils/AuthService';
import socket from '~/utils/socket';

export default class Projects extends React.Component {
    static contextTypes = {
        router: PropTypes.object,
    }

    static propTypes = {
        auth: PropTypes.instanceOf(AuthService).isRequired,
    }

    constructor(props, context) {
        super(props, context);
        this.state = {};
        socket.on('data', data => this.setState({ data }));
        socket.emit('handshake', props.auth.getToken());
        socket.on('handshake', () => {
            socket.emit('request data');
        });
    }

    logout = () => {
        this.props.auth.logout();
        this.context.router.push('/login');
    }

    handleSelect = (eventKey) => {
        event.preventDefault();
        this.setState({
            tab: eventKey,
        });
    };

    render() {
        return (
            <div>
                <h2>Projects</h2>
                <Button onClick={this.logout}>Logout</Button>
            </div>
        );
    }
}
