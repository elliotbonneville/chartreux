import { query } from '../db';

export async function getAllByProject(projectId) {
    return query(`SELECT * FROM target_sites WHERE project_id = "${projectId}"`);
}

export async function getAll() {
    return query('SELECT * FROM target_sites');
}
