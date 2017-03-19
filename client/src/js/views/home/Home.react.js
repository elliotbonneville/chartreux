import React, { PropTypes } from 'react';
import { Button, Nav, NavItem } from 'react-bootstrap';

import BetaTable from '~/views/home/BetaTable.react';
import LinksTable from '~/views/home/LinksTable.react';

import AuthService from '~/utils/AuthService';
import socket from '~/utils/socket';

export default class Home extends React.Component {
    static contextTypes = {
        router: PropTypes.object,
    }

    static propTypes = {
        auth: PropTypes.instanceOf(AuthService).isRequired,
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            data: {
                beta: [],
                links: [],
            },
            tab: '1',
        };
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
        const { data, tab } = this.state;

        return (
            <div>
                <h2>Home</h2>
                <Nav bsStyle="tabs" activeKey={tab} onSelect={this.handleSelect}>
                    <NavItem eventKey="1">Beta</NavItem>
                    <NavItem eventKey="2">Links</NavItem>
                </Nav>
                {tab === '1' ? <BetaTable data={data.beta} /> : null}
                {tab === '2' ? <LinksTable data={data.links} /> : null}
                <Button onClick={this.logout}>Logout</Button>
            </div>
        );
    }
}
