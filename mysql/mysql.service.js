var mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: process.env.DB_CONNECTION_LIMIT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // There seems to be a bug in module mysql:
    // If debug is set (even if it is set to false) there
    // is a lot of debug output, which slows down the server.
    // debug: process.env.DB_DEBUG
});

function executeQuery(sql, callback) {
    console.debug('executeQuery: query is \n "' + sql + '"');
    pool.getConnection((err, connection) => {
        if (err) {
            return callback(err, null);
        } else {
            if (connection) {
                connection.query(sql, function (error, results, fields) {
                    connection.release();
                    if (error) {
                        return callback(error, null);
                    }
                    return callback(null, results);
                });
            }
        }
    });
}

function query(sql, callback) {
    executeQuery(sql, function (err, data) {
        if (err) {
            return callback(err);
        }
        callback(null, data);
    });
}

module.exports = {
    query: query
}