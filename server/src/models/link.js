import { query } from '../db';

// getters
export async function getAllByProject(projectId) {
    return query(`SELECT * FROM links WHERE project_id = "${projectId}"`);
}

export async function getByTargetId(targetId) {
    return query(`SELECT * FROM links WHERE target_site_id="${targetId}"`);
}

export async function getById(linkId) {
    return query(`SELECT * FROM links WHERE id="${linkId}"`);
}

export async function getAll() {
    return query('SELECT * FROM links');
}

// setters
export async function setById(linkId, link) {
    return query('UPDATE links SET ? WHERE id = ?', [link, linkId]);
}

export async function createLink(data) {
    const response = await query('INSERT INTO links () VALUES()');
    const link = await getById(response.insertId);
    await setById(response.insertId, Object.assign(link[0], data));
    return response;
}
