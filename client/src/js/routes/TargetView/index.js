import React from 'react';

import auth from '~/data/auth';
import RecordViewContainer from '~/containers/RecordViewContainer';
import Target from '~/data/models/target';

const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' });
    }
};

export default {
    path: '/projects/:projectId/targets/:targetId',
    component: props =>
        <RecordViewContainer
            {...props}
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
            model={Target}
        />,
    onEnter: requireAuth,
};
