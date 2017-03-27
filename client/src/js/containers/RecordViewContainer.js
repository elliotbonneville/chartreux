import React, { PropTypes } from 'react';

import { get, put } from '~/utils/api';
import auth from '~/data/auth';

import RecordView from '~/components/RecordView';

export default class RecordViewContainer extends React.Component {
    static contextTypes = {
        router: PropTypes.object,
    }

    static propTypes = {
        editing: React.PropTypes.bool,
        location: React.PropTypes.object.isRequired,
        params: React.PropTypes.object.isRequired,
        record: React.PropTypes.object,
        recordType: React.PropTypes.string.isRequired,
        titleField: React.PropTypes.string,
        onCancel: React.PropTypes.func,
    }

    static defaultProps = {
        editing: false,
        record: null,
        titleField: null,
        onCancel: null,
    }

    constructor(props, context) {
        super(props, context);
        const { editing } = this.props.location.query;
        const { record } = props;
        this.state = {
            editing: editing || props.editing || false,
            record: record || null,
            originalRecord: record ? { ...record } : null,
        };
    }

    componentDidMount() {
        if (!this.props.record) this.getRecord(this.props.params[`${this.props.recordType}Id`]);
    }

    onCancel = () => this.setState({
        editing: !this.state.editing,
        record: { ...this.state.originalRecord },
    });

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

    toggleEditMode = async () => {
        const wasEditing = this.state.editing;
        this.setState({ editing: !this.state.editing });

        if (wasEditing) {
            if (this.props.onSave) {
                this.props.onSave(this.state.record);
            } else {
                await this.putRecord(this.props.params[`${this.props.recordType}Id`]);
            }
        }
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
                    record={this.state.record}
                    logout={this.logout}
                    editing={this.state.editing}
                    onCancel={this.props.onCancel || this.onCancel}
                    toggleEditMode={this.toggleEditMode}
                    modifyRecord={this.modifyRecord}
                    titleField={this.props.titleField}
                /> : null
        );
    }
}
