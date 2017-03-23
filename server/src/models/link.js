import { query } from '../db';

export async function getAllByProject(projectId) {
    return query(`SELECT * FROM links WHERE project_id = "${projectId}"`);
}

export async function byId(linkId) {
    return query(`SELECT * FROM links WHERE id="${linkId}"`);
}

export async function getAll() {
    return query('SELECT * FROM links');
}
