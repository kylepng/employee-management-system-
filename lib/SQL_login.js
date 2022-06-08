
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "143H2o**",
    database: "employee_management_db"

});

module.exports = connection;