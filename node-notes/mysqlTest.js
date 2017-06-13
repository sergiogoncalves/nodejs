/*var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'example.org',
  user     : 'bob',
  password : 'secret',
});*/

var Sequelize = require("sequelize");

var sequelize = new Sequelize('cobranca360', 'root', '', {
    host: "localhost",
    port: 3306,
    dialect: 'mysql'
});

sequelize.authenticate().complete(function (err) {
    if (err) {
        console.log('There is connection in ERROR');
    } else {
        console.log('Connection has been established successfully');
    }
});