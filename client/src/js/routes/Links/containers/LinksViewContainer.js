import React, { PropTypes } from 'react';

import auth from '~/data/auth';

import { get } from '~/utils/api';

import LinksView from '../components/LinksView';

export default class LinksViewContainer extends React.Component {
    static contextTypes = {
        router: PropTypes.object,
    }

    propTypes = {
        params: PropTypes.object.isRequired,
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            links: [],
            project: {},
            target: {},
            projectId: 0,
        };
    }

    componentDidMount() {
        this.getLinks(this.props.params.targetId);
    }

    async getLinks(targetId) {
        let links;
        let project;
        const target = await get(`/api/targets?targetId=${targetId}`);
        await Promise.all([
            get(`/api/links?targetId=${targetId}`).then(data => (links = data)),
            get(`/api/projects?projectId=${target.project_id}`).then(data => (project = data)),
        ]);
        this.setState({
            links,
            target,
            project,
        });
    }

    removeLink = async id => this.setState({
        links: this.state.links.filter(link => link.id !== id),
    });

    logout = () => {
        auth.logout();
        this.context.router.push('/login');
    }

    render() {
        return (
            <LinksView
                params={this.props.params}
                recordCount={this.state.links.length}
                links={this.state.links}
                target={this.state.target}
                project={this.state.project}
                logout={this.logout}
                removeLink={this.removeLink}
            />
        );
    }
}
