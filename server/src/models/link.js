import { query } from '../db';

// getters
export function getAllByProject(projectId) {
    return query(`SELECT * FROM links WHERE project_id = "${projectId}"`);
}

export function getByTargetId(targetId) {
    return query(`SELECT * FROM links WHERE target_site_id="${targetId}"`);
}

export function getById(linkId) {
    return query(`SELECT * FROM links WHERE id="${linkId}"`);
}

export function getAll() {
    return query('SELECT * FROM links');
}

// setters
export function setById(linkId, link) {
    return query('UPDATE links SET ? WHERE id = ?', [link, linkId]);
}

export async function createLink(data) {
    const response = await query('INSERT INTO links () VALUES()');
    await setById(response.insertId, data);
    return {
        insertId: response.insertId,
    };
}

export function deleteById(id) {
    return query(`DELETE FROM links WHERE id="${id}"`);
}
