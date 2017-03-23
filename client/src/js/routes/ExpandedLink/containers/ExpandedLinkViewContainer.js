import React, { PropTypes } from 'react';

import auth from '~/data/auth';

import ExpandedLinkView from '../components/ExpandedLinkView';

export default class ExpandedLinkViewContainer extends React.Component {
    static contextTypes = {
        router: PropTypes.object,
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            link: null,
        };
    }

    componentDidMount() {
        this.getLink(this.props.params.linkId);
    }

    async getLink(linkId) {
        fetch(`${window.location.origin}/api/links?linkId=${linkId}`)
            .then((response => response.json()))
            .then((links => this.setState({ link: links[0] })));
    }

    logout = () => {
        auth.logout();
        this.context.router.push('/login');
    }

    render() {
        const link = this.props.link || this.state.link;

        return (
            link ?
                <ExpandedLinkView
                    link={this.props.link || this.state.link}
                    logout={this.logout}
                /> : null
        );
    }
}
