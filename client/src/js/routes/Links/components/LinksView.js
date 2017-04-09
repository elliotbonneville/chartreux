import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Button, Row, Glyphicon } from 'react-bootstrap';

import { deleteRecord } from '~/utils/api';

import RecordsTable from '~/components/RecordsTable';
import LinkModel from '~/data/models/link';

export default function LinksView(props) {
    const createNewLink = async () => {
        browserHistory.push(`${window.location.pathname}/creating`);
    };

    const removeLink = async (id) => {
        /* eslint-disable no-alert */
        if (confirm('Are you sure you want to remove this link?')) {
            await deleteRecord('link', id);
            props.removeLink(id);
        }
        /* eslint-enable no-alert */
    };

    const { links, logout } = props;

    return (
        <div>
            <Row>
                <Button bsSize="medium" onClick={createNewLink}>
                    <Glyphicon glyph="plus" />
                </Button>
            </Row>
            <Row>
                <RecordsTable
                    columns={['keyword_1_url', 'article_title', 'keyword_1', 'date_added']}
                    linkField="keyword_1_url"
                    model={LinkModel}
                    records={links}
                    removeRecord={removeLink}
                />
            </Row>
            <Row>
                <Button onClick={logout}>Logout</Button>
            </Row>
        </div>
    );
}

LinksView.propTypes = {
    logout: PropTypes.func.isRequired,
    links: PropTypes.array.isRequired,
    removeLink: PropTypes.func.isRequired,
};
