import React, { PropTypes } from 'react';
import { Button, Table } from 'react-bootstrap';

export default function LinksView(props) {
    const { links } = props;
    const columns = Object.keys(links[0] || [])
        .map((name, id) => ({ name, id }))
        .filter(({ name }) => name !== 'user_id');

    return (
        <div>
            <h2>Links</h2>
            <Table striped bordered condensed hover>
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
