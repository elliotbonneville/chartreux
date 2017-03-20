import { query } from '../db';

export async function getAllByUser(userId) {
    return query(`SELECT * FROM projects WHERE user_id = "${userId}"`);
}

export async function getAll() {
    return query('SELECT * FROM projects');
}
