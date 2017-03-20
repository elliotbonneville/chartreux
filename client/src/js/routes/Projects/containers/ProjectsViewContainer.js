import React, { PropTypes } from 'react';

import socket from '~/utils/socket';
import auth from '~/data/auth';

import ProjectsView from '../components/ProjectsView';

export default class ProjectsViewContainer extends React.Component {
    static contextTypes = {
        router: PropTypes.object,
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            projects: null,
        };
        // socket.on('data', data => this.setState({ data }));
        // socket.emit('handshake', auth.getToken());
        // socket.on('handshake', () => {
        //     socket.emit('request data');
        // });
    }

    componentDidMount() {
        // request projects
        Promise.delay(100).then(() => this.setState({
            projects: 'hello world',
        }));
    }

    logout = () => {
        auth.logout();
        this.context.router.push('/login');
    }

    render() {
        return (
            <ProjectsView
                projects={this.state.projects}
                logout={this.logout}
            />
        );
    }
}
