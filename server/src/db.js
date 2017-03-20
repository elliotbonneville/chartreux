import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'oxmind.cuypuqkjhqol.us-east-2.rds.amazonaws.com',
    user: 'oxbowdev',
    password: 'Ysnp!1955',
    database: 'oxmind_db',
});

connection.connect();

export function query(queryString) {
    return new Promise((resolve, reject) => {
        connection.query(queryString, (error, results) => {
            if (error) reject(error);
            else resolve(results);
        });
    });
}

// however this is going to work
export function write() {

}
