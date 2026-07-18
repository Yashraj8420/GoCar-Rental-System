const mysql = require("mysql2");

const connection = mysql.createConnection({

    host: "localhost",

    user: "root",

    password: "admin",      
    database: "GoCar",

});

connection.connect((err) => {

    if (err) {

        console.log(err);

    } else {

        console.log("MySQL Connected Successfully");

    }

});

module.exports = connection;