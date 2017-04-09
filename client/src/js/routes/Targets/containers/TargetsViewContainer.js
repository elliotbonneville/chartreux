import React, { PropTypes } from 'react';

import auth from '~/data/auth';

import { get } from '~/utils/api';

import TargetsView from '../components/TargetsView';

export default class TargetsViewContainer extends React.Component {
    static contextTypes = {
        router: PropTypes.object,
    }

    propTypes = {
        params: PropTypes.object.isRequired,
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            project: {},
            targets: [],
            userId: auth.getProfile().sub,
        };
    }

    componentDidMount() {
        this.getTargets(this.props.params.projectId);
    }

    async getTargets(projectId) {
        this.setState({
            targets: await get(`/api/targets?projectId=${projectId}`),
        });
    }

    removeTarget = async id => this.setState({
        targets: this.state.targets.filter(target => target.id !== id),
    });

    logout = () => {
        auth.logout();
        this.context.router.push('/login');
    }

    render() {
        return (
            <TargetsView
                targets={this.state.targets}
                recordCount={this.state.targets.length}
                logout={this.logout}
                removeTarget={this.removeTarget}
            />
        );
    }
}
