import React, { PropTypes } from 'react';
import { Button, ButtonGroup, Grid, Row } from 'react-bootstrap';

import RecordField from './RecordField';

export default function RecordView(props) {
    const { record, fields, model, editing } = props;

    // Calculate distribution of fields to columns
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
                                field={model[col.name]}
                                fieldName={col.name}
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
    editing: PropTypes.bool,
    fields: PropTypes.array.isRequired,
    model: PropTypes.object.isRequired,
    onCancel: PropTypes.func,
    record: PropTypes.object.isRequired,
    titleField: PropTypes.string.isRequired,
    toggleEditMode: PropTypes.func,
};

RecordView.defaultProps = {
    editing: false,
    toggleEditMode: () => {},
    onCancel: () => {},
};
