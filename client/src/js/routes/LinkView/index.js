import React from 'react';

import auth from '~/data/auth';
import RecordViewContainer from '~/containers/RecordViewContainer';
import Link from '~/data/models/link';

const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' });
    }
};

export default {
    path: '/projects/:projectId/targets/:targetId/links/:linkId',
    component: props =>
        <RecordViewContainer
            {...props}
            fields={[
                'pbn_name',
                'pbn_url',
                'article_title',
                'article_url',
                'author',
                'date_added',
                'keyword_1',
                'do_follow',
                'indexed',
                'keyword_1_url',
                'authority_url',
                'image',
                'video',
                'done',
            ]}
            model={Link}
            recordType={'link'}
            titleField="keyword_1"
        />,
    onEnter: requireAuth,
};
