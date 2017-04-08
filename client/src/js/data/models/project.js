import { TEXT, DATE } from './fields';

export default {
    user_id: null,
    project: [TEXT, 'Name'],
    creation_date: [DATE, 'Creation Date'],
    archive: null,
};
