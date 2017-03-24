import React, { PropTypes } from 'react';

import auth from '~/data/auth';

import LinksView from '../components/LinksView';

export default class LinksViewContainer extends React.Component {
    static contextTypes = {
        router: PropTypes.object,
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            links: [],
            projectId: 0,
        };
    }

    componentDidMount() {
        this.getLinks(this.props.params.targetId);
    }

    async getLinks(targetId) {
        fetch(`${window.location.origin}/api/links?targetId=${targetId}`)
            .then((response => response.json()))
            .then((links => this.setState({ links })));
    }

    logout = () => {
        auth.logout();
        this.context.router.push('/login');
    }

    render() {
        return (
            <LinksView
                params={this.props.params}
                links={this.state.links}
                logout={this.logout}
            />
        );
    }
}
