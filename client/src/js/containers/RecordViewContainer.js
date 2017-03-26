import React, { PropTypes } from 'react';

import { get, put } from '~/utils/api';
import auth from '~/data/auth';

import RecordView from '~/components/RecordView';

export default class RecordViewContainer extends React.Component {
    static contextTypes = {
        router: PropTypes.object,
    }

    static propTypes = {
        location: React.PropTypes.object.isRequired,
        params: React.PropTypes.object.isRequired,
        record: React.PropTypes.object,
        recordType: React.PropTypes.string.isRequired,
        titleField: React.PropTypes.string,
        cancelEditMode: React.PropTypes.func,
    }

    static defaultProps = {
        record: null,
        titleField: null,
        cancelEditMode: null,
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            editing: this.props.location.query.editing || false,
            originalRecord: null,
            record: null,
        };
    }

    componentDidMount() {
        this.getRecord(this.props.params[`${this.props.recordType}Id`]);
    }

    async getRecord(id) {
        const recordType = this.props.recordType;
        const record = (await get(`/api/${recordType}s?${recordType}Id=${id}`))[0];
        this.setState({
            record,
            originalRecord: { ...record },
        });
    }

    async putRecord(id) {
        const recordType = this.props.recordType;
        const response = await put(`/api/${recordType}s?${recordType}Id=${id}`, this.state.record);
        if (response.status === 200) {
            this.setState({ originalRecord: { ...this.state.record } });
        }
    }

    modifyRecord = (property, value) => {
        this.setState({
            record: Object.assign(this.state.record, {
                [property]: value,
            }),
        });
    }

    cancelEditMode = () => this.setState({
        editing: !this.state.editing,
        record: { ...this.state.originalRecord },
    });

    toggleEditMode = async () => {
        const wasEditing = this.state.editing;
        this.setState({ editing: !this.state.editing });

        if (wasEditing) await this.putRecord(this.props.params[`${this.props.recordType}Id`]);
    };

    logout = () => {
        auth.logout();
        this.context.router.push('/login');
    }

    render() {
        const record = this.props.record || this.state.record;

        return (
            record ?
                <RecordView
                    record={this.props.record || this.state.record}
                    logout={this.logout}
                    editing={this.state.editing}
                    cancelEditMode={this.props.cancelEditMode || this.cancelEditMode}
                    toggleEditMode={this.toggleEditMode}
                    modifyRecord={this.modifyRecord}
                    titleField={this.props.titleField}
                /> : null
        );
    }
}
