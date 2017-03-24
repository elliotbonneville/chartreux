import React from 'react';
import { Table } from 'react-bootstrap';

export default function RecordTable(props) {
    const { columns, records } = props;
    return (
        <Table hover>
            <thead>
                <tr>
                    {columns.map(column =>
                        <th key={column.id}>{column.name}</th>,
                    )}
                </tr>
            </thead>
            <tbody>
                {records.map(record =>
                    <tr key={record.id}>
                        {columns.map(column =>
                            <td key={column.id}>{record[column.name]}</td>,
                        )}
                    </tr>,
                )}
            </tbody>
        </Table>
    );
}
