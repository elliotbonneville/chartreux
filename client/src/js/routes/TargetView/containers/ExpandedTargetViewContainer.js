import React, { PropTypes } from 'react';

import auth from '~/data/auth';

import RecordView from '~/components/RecordView';

export default class ExpandedTargetViewContainer extends React.Component {
    static contextTypes = {
        router: PropTypes.object,
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            editing: false,
            originalTarget: null,
            target: null,
        };
    }

    componentDidMount() {
        this.getTarget(this.props.params.targetId);
    }

    async getTarget(targetId) {
        fetch(`${window.location.origin}/api/targets?targetId=${targetId}`)
            .then((response => response.json()))
            .then((targets => this.setState({
                target: targets[0],
                originalTarget: { ...targets[0] },
            })));
    }

    async putTarget(targetId) {
        const response = await fetch(
            `${window.location.origin}/api/targets?targetId=${targetId}`,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(this.state.target),
            },
        );

        if (response.status === 200) {
            this.setState({ originalTarget: { ...this.state.target } });
        }
    }

    modifyTarget = (property, value) => this.setState({
        target: Object.assign(this.state.target, {
            [property]: value,
        }),
    });

    cancelEditMode = () => this.setState({
        editing: !this.state.editing,
        target: { ...this.state.originalTarget },
    });

    toggleEditMode = async () => {
        const wasEditing = this.state.editing;
        this.setState({ editing: !this.state.editing });

        if (wasEditing) await this.putTarget(this.props.params.targetId);
    };

    logout = () => {
        auth.logout();
        this.context.router.push('/login');
    }

    render() {
        const target = this.props.target || this.state.target;

        return (
            target ?
                <RecordView
                    record={this.props.target || this.state.target}
                    logout={this.logout}
                    editing={this.state.editing}
                    cancelEditMode={this.cancelEditMode}
                    toggleEditMode={this.toggleEditMode}
                    modifyRecord={this.modifyTarget}
                    titleField={'url'}
                /> : null
        );
    }
}
