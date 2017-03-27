import { query } from '../db';

// getters
export async function getAllByUser(userId) {
    return query(`SELECT * FROM projects WHERE user_id = "${userId}"`);
}

export async function getByProjectId(projectId) {
    return query(`SELECT * FROM projects WHERE id = "${projectId}"`);
}

export async function getAll() {
    return query('SELECT * FROM projects');
}

// setters
export async function setById(projectId, project) {
    return query('UPDATE projects SET ? WHERE id = ?', [project, projectId]);
}

export async function createProject(data) {
    const response = await query('INSERT INTO projects () VALUES()');
    await setById(response.insertId, data);
    return {
        insertId: response.insertId,
    };
}
