import React, { PropTypes } from 'react';

import { Link } from 'react-router';
import { Table, Button } from 'react-bootstrap';

export default function RecordTable(props) {
    const { columns, records } = props;

    records.forEach((record) => {
        const pathname = props.getChildrenPath
            ? props.getChildrenPath(record)
            : `${window.location.pathname}/${record.id}`;

        Object.assign(record, {
            [props.linkField]: <Link to={pathname}>{record[props.linkField]}</Link>,
        });
    });

    return (
        <Table hover>
            <thead>
                <tr>
                    {columns.map(column =>
                        <th key={column.id}>{column.name}</th>,
                    )}
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {records.map(record =>
                    <tr key={record.id}>
                        {columns.map(column =>
                            <td key={column.id}>{record[column.name]}</td>,
                        )}
                        <td>
                            <Link
                                to={{
                                    pathname: `${window.location.pathname}/${record.id}`,
                                    query: { editing: true },
                                }}>
                                edit
                            </Link>
                        </td>
                        <td>
                            <Button onClick={() => props.removeRecord(record.id)}>
                                x
                            </Button>
                        </td>
                    </tr>,
                )}
            </tbody>
        </Table>
    );
}

RecordTable.propTypes = {
    columns: PropTypes.array.isRequired,
    records: PropTypes.array.isRequired,
};
