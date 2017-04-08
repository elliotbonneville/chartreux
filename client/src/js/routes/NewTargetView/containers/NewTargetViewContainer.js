import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

import { put } from '~/utils/api';
import Target from '~/data/models/target';
import RecordViewContainer from '~/containers/RecordViewContainer';

async function createProject(data) {
    const { id } = (await put('/api/targets/new', data).then(response => response.json()));
    const route = `/targets/${id}`;
    browserHistory.push(route);
}

export default function NewTargetViewContainer(props) {
    return (
        <RecordViewContainer
            {...props}
            editing
            fields={[
                'site_name',
                'url',
                'site_host',
                'site_type',
                'site_date',
                'desc',
            ]}
            recordType="target"
            titleField="url"
            onCancel={browserHistory.goBack}
            onSave={createProject}
            model={Target}
            record={{
                ...Object.keys(Target).reduce(
                    (acc, key) => Object.assign(acc, { [key]: null }), {},
                ),
                project_id: props.params.projectId,
            }}
        />
    );
}

NewTargetViewContainer.propTypes = {
    params: PropTypes.object.isRequired,
};
