import React, { PropTypes } from 'react';

import auth from '~/data/auth';

import TargetsView from '../components/TargetsView';

export default class TargetsViewContainer extends React.Component {
    static contextTypes = {
        router: PropTypes.object,
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            targets: [],
            userId: auth.getProfile().sub,
        };
    }

    componentDidMount() {
        this.getTargets(this.props.params.projectId);
    }

    async getTargets(projectId) {
        fetch(`${window.location.origin}/api/targets?projectId=${projectId}`)
            .then((response => response.json()))
            .then((targets => this.setState({ targets })));
    }

    logout = () => {
        auth.logout();
        this.context.router.push('/login');
    }

    render() {
        return (
            <TargetsView
                targets={this.state.targets}
                logout={this.logout}
            />
        );
    }
}
