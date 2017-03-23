import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Table } from 'react-bootstrap';

export default function LinksView(props) {
    const { links } = props;
    const columns = ['keyword_1_url', 'article_title', 'keyword_1', 'date_added']
        .map((name, id) => ({ name, id }))
        .filter(({ name }) => name !== 'user_id');

    links.forEach(link => Object.assign(link, {
        keyword_1_url: <Link to={`${window.location}/${link.id}`}>{link.keyword_1_url}</Link>,
    }));

    return (
        <div>
            <h2>Links</h2>
            <Table>
                <thead>
                    <tr>
                        {columns.map(column =>
                            <th key={column.id}>{column.name}</th>,
                        )}
                    </tr>
                </thead>
                <tbody>
                    {links.map(link =>
                        <tr key={link.id}>
                            {columns.map(column =>
                                <td key={column.id}>{link[column.name]}</td>,
                            )}
                        </tr>,
                    )}
                </tbody>
            </Table>
            <Button onClick={props.logout}>Logout</Button>
        </div>
    );
}

LinksView.propTypes = {
    logout: PropTypes.func.isRequired,
    links: PropTypes.array.isRequired,
};
