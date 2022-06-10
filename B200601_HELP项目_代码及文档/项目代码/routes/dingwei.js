var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "help"
});
connection.connect();
/* GET home page. */
router.get('/', function(req, res, next) {
    var sql = 'select * from task where address <=5 and style="否" ';
    // var sql1 = 'select * from moredish';

    connection.query(sql, function(err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else { res.render('dingwei', { data: result }); }
    });
});


module.exports = router;