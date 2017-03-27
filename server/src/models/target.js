import { query } from '../db';

// getters
export async function getAllByProject(projectId) {
    return query(`SELECT * FROM target_sites WHERE project_id = "${projectId}"`);
}

export async function getById(targetId) {
    return query(`SELECT * FROM target_sites WHERE id = "${targetId}"`);
}

export async function getAll() {
    return query('SELECT * FROM target_sites');
}

// setters
export async function setById(targetId, target) {
    return query('UPDATE target_sites SET ? WHERE id = ?', [target, targetId]);
}

export async function createTarget(data) {
    const response = await query('INSERT INTO target_sites () VALUES()');
    await setById(response.insertId, data);
    return {
        insertId: response.insertId,
    };
}

export function deleteById(id) {
    return Promise.all([
        query(`DELETE FROM target_sites WHERE id="${id}"`),
        query(`DELETE FROM links WHERE target_site_id="${id}"`),
    ]);
}
