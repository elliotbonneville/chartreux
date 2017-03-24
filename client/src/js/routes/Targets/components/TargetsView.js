import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import RecordsTable from '~/components/RecordsTable';

export default function TargetsView(props) {
    const { targets } = props;
    const columns = Object.keys(targets[0] || []).map((name, id) => ({ name, id }));
    targets.forEach((target) => {
        const editDescriptor = {
            pathname: `/projects/${target.project_id}/targets/${target.id}`,
            query: { editing: true },
        };

        Object.assign(target, {
            site_name: <Link to={`/projects/${target.project_id}/targets/${target.id}/links`}>{target.site_name}</Link>,
            edit: <Link to={editDescriptor}>edit</Link>,
        });
    });
    columns.push({ id: columns.length, name: 'edit' });

    return (
        <div>
            <h2>Targets</h2>
            <RecordsTable columns={columns} records={targets} />
            <Button onClick={props.logout}>Logout</Button>
        </div>
    );
}

TargetsView.propTypes = {
    logout: PropTypes.func.isRequired,
    targets: PropTypes.array.isRequired,
};
