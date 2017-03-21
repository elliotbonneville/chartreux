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

    async getTargets(/* projectId */) {
        // fetch(`${window.location.origin}/api/targets?projectId=${projectId}`)
        //     .then((response => response.json()))
        //     .then((targets => this.setState({ targets })));
        Promise.delay(300).then(() => {
            this.setState({
                targets: [
                    {
                        id: 1,
                        site_name: 'Oxbow SEO',
                        url: 'http://oxbowseo.com',
                        site_host: 'HostNine',
                        site_type: 'Money',
                        project_id: 6,
                        description: 'A lovely site ranked in New England for Search Engine Optimization services.',
                    },
                    {
                        id: 2,
                        site_name: 'Oxbow SEO Facebook',
                        url: 'https://facebook.com/oxbowseo',
                        site_host: 'Facebook',
                        site_type: 'Social',
                        project_id: 6,
                        description: 'Facebook page for Oxbow SEO.',
                    },
                ],
            });
        });
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
