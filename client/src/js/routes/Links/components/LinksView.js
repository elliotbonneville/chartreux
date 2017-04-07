import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Button, Grid, Row, Glyphicon } from 'react-bootstrap';

import { deleteRecord } from '~/utils/api';

import RecordsTable from '~/components/RecordsTable';

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

    const { links } = props;
    const columns = ['keyword_1_url', 'article_title', 'keyword_1', 'date_added']
        .map((name, id) => ({ name, id }))
        .filter(({ name }) => name !== 'user_id');

    return (
        <Grid>
            <Row style={{ paddingTop: 20 }}>
                <h2 style={{ display: 'inline' }}>Links</h2>
                <Button bsSize="medium" style={{ marginLeft: 10 }} onClick={createNewLink}>
                    <Glyphicon glyph="plus" />
                </Button>
            </Row>
            <Row>
                <RecordsTable
                    columns={columns}
                    columnNames={{
                        keyword_1_url: 'Anchor Text',
                        article_title: 'Page Title',
                        keyword_1: 'Keyword',
                        date_added: 'Date Added',
                    }}
                    records={links}
                    linkField="keyword_1_url"
                    removeRecord={removeLink}
                />
            </Row>
            <Row>
                <Button onClick={props.logout}>Logout</Button>
            </Row>
        </Grid>
    );
}

LinksView.propTypes = {
    logout: PropTypes.func.isRequired,
    links: PropTypes.array.isRequired,
};
