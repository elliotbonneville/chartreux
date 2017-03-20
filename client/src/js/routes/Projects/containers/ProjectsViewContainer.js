import React, { PropTypes } from 'react';

import auth from '~/data/auth';

import ProjectsView from '../components/ProjectsView';

export default class ProjectsViewContainer extends React.Component {
    static contextTypes = {
        router: PropTypes.object,
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            projects: [],
            userId: auth.getProfile().sub,
        };
    }

    componentDidMount() {
        this.getProjects();
    }

    async getProjects() {
        fetch(`${window.location.origin}/api/projects?userId=${this.state.userId}`)
            .then((response => response.json()))
            .then((projects => this.setState({ projects })));
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
