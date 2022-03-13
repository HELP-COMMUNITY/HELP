var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;


// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "register"
// });
// connection.connect();


