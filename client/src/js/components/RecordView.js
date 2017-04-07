import React, { PropTypes } from 'react';
import { Button, ButtonGroup, Grid, Row } from 'react-bootstrap';

import RecordField from './RecordField';

export default function RecordView(props) {
    const { record, fieldNames, editing } = props;
    const allowedFieldNames = Object
        .keys(fieldNames)
        .filter(name => fieldNames[name]);
    const fields = Object
        .keys(record)
        .filter(field => allowedFieldNames.indexOf(field) > -1);
    const columns = fields.reduce((acc, cur, i) => {
        const column = { name: cur, id: i };
        if (i % 2 === 0) {
            return acc.concat([[column]]);
        }

        acc[acc.length - 1].push(column);
        return acc;
    }, []);

    return (
        <div>
            <h2>{record[props.titleField]}</h2>
            <ButtonGroup>
                <Button onClick={props.toggleEditMode}>
                    {editing ? 'Save' : 'Edit'}
                </Button>
            </ButtonGroup>
            {editing ? <Button onClick={props.onCancel}>Cancel</Button> : null}
            <Grid>
                {columns.map(colNames =>
                    <Row>
                        {colNames.map(col =>
                            <RecordField
                                key={col.id}
                                displayProperty={fieldNames[col.name]}
                                property={col.name}
                                value={record[col.name]}
                                editing={editing}
                                modifyRecord={props.modifyRecord}
                            />,
                        )}
                    </Row>,
                )}
            </Grid>
        </div>
    );
}

RecordView.propTypes = {
    record: PropTypes.object.isRequired,
    fieldNames: PropTypes.object.isRequired,
    editing: PropTypes.bool,
    titleField: PropTypes.string.isRequired,
    toggleEditMode: PropTypes.func,
    onCancel: PropTypes.func,
};

RecordView.defaultProps = {
    editing: false,
    toggleEditMode: () => {},
    onCancel: () => {},
};
