import React, { PropTypes } from 'react';

import { Link } from 'react-router';
import { Table, Button } from 'react-bootstrap';

import { deserializeField } from '~/data/models/fields';

export default function RecordsTable(props) {
    const { records, model } = props;
    const columns = props.columns.map((name, id) => ({ name, id }));

    records.forEach((record) => {
        const pathname = props.getChildrenPath
            ? props.getChildrenPath(record)
            : `${window.location.pathname}/${record.id}`;

        Object.assign(record, {
            [props.linkField]: <Link to={pathname}>{record[props.linkField]}</Link>,
        });

        // if there are any dates stored on this record, parse them with Moment
        Object.keys(record).forEach((field) => {
            if (!model[field]) return;
            Object.assign(record, {
                [field]: deserializeField(model[field], record[field]),
            });
        });
    });

    return (
        <Table hover>
            <thead>
                <tr>
                    {columns.map(column =>
                        <th key={column.id}>{model[column.name][1]}</th>,
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
    records: PropTypes.array.isRequired,
    model: PropTypes.object.isRequired,
};
