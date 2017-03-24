import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import RecordsTable from '~/components/RecordsTable';

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

    return (
        <div>
            <h2>Links</h2>
            <RecordsTable columns={columns} records={links} />
            <Button onClick={props.logout}>Logout</Button>
        </div>
    );
}

LinksView.propTypes = {
    logout: PropTypes.func.isRequired,
    links: PropTypes.array.isRequired,
};
