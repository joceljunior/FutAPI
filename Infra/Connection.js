const Mysql = require("mysql");

const conn = Mysql.createConnection( {
    host: "localhost",
    port: 3307,
    user: "root",
    password: "chinacus17" ,
    database: "Kasballet"
});

module.exports = conn;