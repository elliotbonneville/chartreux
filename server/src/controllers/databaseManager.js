import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'oxmind.cuypuqkjhqol.us-east-2.rds.amazonaws.com',
    user: 'oxbowdev',
    password: 'Ysnp!1955',
    database: 'oxmind_db',
});

connection.connect();

const databaseManager = {
    request: table => new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    }),
};

export default databaseManager;
