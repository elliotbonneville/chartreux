import moment from 'moment';

const deserializedFormat = 'MM/DD/YYYY';
const serializedFormat = 'YYYY-MM-DDT00:00:00.000';

const DateField = {
    serialize(value) {
        const date = moment(value, deserializedFormat);
        if (!value || date.isValid()) return value;

        return date.format(serializedFormat);
    },

    deserialize(value) {
        const date = moment(value, serializedFormat);
        if (!value || !date.isValid()) return value;

        return date.format(deserializedFormat);
    },
};

export default DateField;
