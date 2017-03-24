import React, { PropTypes } from 'react';

import auth from '~/data/auth';

import RecordView from '~/components/RecordView';

export default class ExpandedProjectViewContainer extends React.Component {
    static contextTypes = {
        router: PropTypes.object,
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            editing: false,
            originalProject: null,
            project: null,
        };
    }

    componentDidMount() {
        this.getProject(this.props.params.projectId);
    }

    async getProject(projectId) {
        fetch(`${window.location.origin}/api/projects?projectId=${projectId}`)
            .then((response => response.json()))
            .then((projects => this.setState({
                project: projects[0],
                originalProject: { ...projects[0] },
            })));
    }

    async putProject(projectId) {
        const response = await fetch(
            `${window.location.origin}/api/projects?projectId=${projectId}`,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(this.state.project),
            },
        );

        if (response.status === 200) {
            this.setState({ originalProject: { ...this.state.project } });
        }
    }

    modifyProject = (property, value) => this.setState({
        project: Object.assign(this.state.project, {
            [property]: value,
        }),
    });

    cancelEditMode = () => this.setState({
        editing: !this.state.editing,
        project: { ...this.state.originalProject },
    });

    toggleEditMode = async () => {
        const wasEditing = this.state.editing;
        this.setState({ editing: !this.state.editing });

        if (wasEditing) await this.putProject(this.props.params.projectId);
    };

    logout = () => {
        auth.logout();
        this.context.router.push('/login');
    }

    render() {
        const project = this.props.project || this.state.project;

        return (
            project ?
                <RecordView
                    record={this.props.project || this.state.project}
                    logout={this.logout}
                    editing={this.state.editing}
                    cancelEditMode={this.cancelEditMode}
                    toggleEditMode={this.toggleEditMode}
                    modifyRecord={this.modifyProject}
                    titleField={'project'}
                /> : null
        );
    }
}
