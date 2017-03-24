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
