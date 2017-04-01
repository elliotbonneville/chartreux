import mysql from 'mysql';

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

export function query(queryString, args = []) {
    return new Promise((resolve, reject) => {
        pool.getConnection((connectionError, connection) => {
            if (connectionError) {
                reject(connectionError);
            } else {
                connection.query(queryString, args, (queryError, results) => {
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
