import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

import AuthService from '~/utils/AuthService';

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
            profile: {},
        };
        props.auth.lock.getUserInfo(props.auth.getToken(), (error, profile) => {
            this.setState({ profile });
        });
    }

    logout = () => {
        this.props.auth.logout();
        this.context.router.push('/login');
    }

    render() {
        const { profile } = this.state;
        return (
            <div>
                <h2>Home</h2>
                <p>Welcome {profile.name}!</p>
                <Button onClick={this.logout}>Logout</Button>
            </div>
        );
    }
}
