import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'oxmind.cuypuqkjhqol.us-east-2.rds.amazonaws.com',
    user: 'oxbowdev',
    password: 'Ysnp!1955',
    database: 'oxmind_db',
});

connection.connect();

const databaseManager = {
    getProjects: userId => new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM projects WHERE user_id = ${userId}`, (error, results) => {
            if (error) reject(error);
            else resolve(results);
        });
    }),

    getLinks: projectId => new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM links WHERE project_id = ${projectId}`, (error, results) => {
            if (error) reject(error);
            else resolve(results);
        });
    }),
};

export default databaseManager;
