import React, { PropTypes } from 'react';

import auth from '~/data/auth';

import RecordView from '~/components/RecordView';

export default class ExpandedLinkViewContainer extends React.Component {
    static contextTypes = {
        router: PropTypes.object,
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            editing: false,
            originalLink: null,
            link: null,
        };
    }

    componentDidMount() {
        this.getLink(this.props.params.linkId);
    }

    async getLink(linkId) {
        fetch(`${window.location.origin}/api/links?linkId=${linkId}`)
            .then((response => response.json()))
            .then((links => this.setState({
                link: links[0],
                originalLink: { ...links[0] },
            })));
    }

    async putLink(linkId) {
        const response = await fetch(
            `${window.location.origin}/api/links?linkId=${linkId}`,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(this.state.link),
            },
        );

        if (response.status === 200) {
            this.setState({ originalLink: { ...this.state.link } });
        }
    }

    modifyLink = (property, value) => this.setState({
        link: Object.assign(this.state.link, {
            [property]: value,
        }),
    });

    cancelEditMode = () => this.setState({
        editing: !this.state.editing,
        link: { ...this.state.originalLink },
    });

    toggleEditMode = async () => {
        const wasEditing = this.state.editing;
        this.setState({ editing: !this.state.editing });

        if (wasEditing) await this.putLink(this.props.params.linkId);
    };

    logout = () => {
        auth.logout();
        this.context.router.push('/login');
    }

    render() {
        const link = this.props.link || this.state.link;

        return (
            link ?
                <RecordView
                    record={this.props.link || this.state.link}
                    logout={this.logout}
                    editing={this.state.editing}
                    cancelEditMode={this.cancelEditMode}
                    toggleEditMode={this.toggleEditMode}
                    modifyRecord={this.modifyLink}
                    titleField={'article_url'}
                /> : null
        );
    }
}
