import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { Button, Grid, Row, Glyphicon } from 'react-bootstrap';

import RecordsTable from '~/components/RecordsTable';

import linkModel from '~/data/models/link';

export default function LinksView(props) {
    const { links } = props;
    const columns = ['keyword_1_url', 'article_title', 'keyword_1', 'date_added']
        .map((name, id) => ({ name, id }))
        .filter(({ name }) => name !== 'user_id');

    columns.push({ id: columns.length, name: 'edit' });

    links.forEach((link) => {
        const pathname = `${window.location.pathname}/${link.id}`;
        const editDescriptor = {
            pathname,
            query: { editing: true },
        };

        Object.assign(link, {
            keyword_1_url: <Link to={pathname}>{link.keyword_1_url}</Link>,
            edit: <Link to={editDescriptor}>edit</Link>,
        });
    });

    const createNewLink = async () => {
        browserHistory.push(`${window.location.pathname}/creating`);
    };

    return (
        <Grid>
            <Row style={{ paddingTop: 20 }}>
                <h2 style={{ display: 'inline' }}>Links</h2>
                <Button bsSize="medium" style={{ marginLeft: 10 }} onClick={createNewLink}>
                    <Glyphicon glyph="plus" />
                </Button>
            </Row>
            <Row>
                <RecordsTable columns={columns} records={links} />
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
    createNewLink: PropTypes.func.isRequired,
};
