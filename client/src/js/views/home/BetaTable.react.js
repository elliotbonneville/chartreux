import React from 'react';

import { Table } from 'react-bootstrap';

export default function BetaTable(props) {
    return (
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(datum =>
                    <tr key={datum.id.toString()}>
                        <td>{datum.id}</td>
                        <td>{datum.article_author}</td>
                        <td>{datum.article_title}</td>
                        <td>{datum.date}</td>
                    </tr>,
                )}
            </tbody>
        </Table>
    );
}
