import DateField from './date';

export const BOOL = 0;
export const DATE = 1;
export const TEXT = 2;

export function deserializeField(field, value) {
    if (field[0] === DATE) {
        return DateField.deserialize(value);
    }

    return value;
}

export function serializeField(field, value) {
    if (field[0] === DATE) {
        return DateField.serialize(value);
    }

    return value;
}

export { DateField };
