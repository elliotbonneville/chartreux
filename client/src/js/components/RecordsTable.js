import React, { PropTypes } from 'react';

import { Link } from 'react-router';
import { Table, Button } from 'react-bootstrap';

export default function RecordsTable(props) {
    const { columnNames, records } = props;
    let { columns } = props;
    const allowedColumns = Object.keys(columnNames);
    columns = columns.filter(column => allowedColumns.indexOf(column.name) > -1);

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
                        <th key={column.id}>{columnNames[column.name]}</th>,
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

RecordsTable.propTypes = {
    columns: PropTypes.array.isRequired,
    columnNames: PropTypes.object.isRequired,
    records: PropTypes.array.isRequired,
};
