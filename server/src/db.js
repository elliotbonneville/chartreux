import mysql from 'mysql';

const pool = mysql.createPool({
    host: 'oxmind.cuypuqkjhqol.us-east-2.rds.amazonaws.com',
    user: 'oxbowdev',
    password: 'Ysnp!1955',
    database: 'oxmind_db',
});

export function query(queryString) {
    return new Promise((resolve, reject) => {
        pool.getConnection((connectionError, connection) => {
            if (connectionError) {
                reject(connectionError);
            } else {
                connection.query(queryString, (queryError, results) => {
                    connection.release();
                    if (queryError) reject(queryError);
                    else resolve(results);
                });
            }
        });
    });
}

// however this is going to work
export function write() {

}
