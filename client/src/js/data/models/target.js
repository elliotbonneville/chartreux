import { TEXT, DATE } from './fieldTypes';

export default {
    project_id: null,
    site_name: [TEXT, 'Name'],
    url: [TEXT, 'URL'],
    site_host: [TEXT, 'Host'],
    site_type: [TEXT, 'Type'],
    site_date: [DATE, 'Creation Date'],
    desc: [TEXT, 'Description'],
};
