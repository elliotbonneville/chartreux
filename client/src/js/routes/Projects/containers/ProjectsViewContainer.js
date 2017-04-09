import React, { PropTypes } from 'react';

import auth from '~/data/auth';

import { get } from '~/utils/api';

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
        get(`/api/projects?userId=${this.state.userId}`)
            .then(projects => this.setState({ projects }));
    }

    updateProject = async id =>
        get(`/api/projects?projectId=${id}}`)
            .then((project) => {
                const { projects } = this.state;
                projects[projects.findIndex(record => record.id === id)] = project[0];
                this.setState({
                    projects: [...projects],
                });
            });

    logout = () => {
        auth.logout();
        this.context.router.push('/login');
    }

    render() {
        return (
            <ProjectsView
                projects={this.state.projects}
                recordCount={this.state.projects.length}
                logout={this.logout}
                updateProject={this.updateProject}
            />
        );
    }
}
