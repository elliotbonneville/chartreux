import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {
    Button,
    Table,
} from 'react-bootstrap';

export default function TargetsView(props) {
    const { targets } = props;
    const columns = Object.keys(targets[0] || []).map((name, id) => ({ name, id }));
    targets.forEach((target) => {
        Object.assign(target, {
            site_name: <Link to={`/projects/${target.project_id}`}>{target.site_name}</Link>,
        });
    });

    return (
        <div>
            <h2>Targets</h2>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        {columns.map(column =>
                            <th key={column.id}>{column.name}</th>,
                        )}
                    </tr>
                </thead>
                <tbody>
                    {targets.map(target =>
                        <tr key={target.id}>
                            {columns.map(column =>
                                <td key={column.id}>{target[column.name]}</td>,
                            )}
                        </tr>,
                    )}
                </tbody>
            </Table>
            <Button onClick={props.logout}>Logout</Button>
        </div>
    );
}

TargetsView.propTypes = {
    logout: PropTypes.func.isRequired,
    targets: PropTypes.array.isRequired,
};
