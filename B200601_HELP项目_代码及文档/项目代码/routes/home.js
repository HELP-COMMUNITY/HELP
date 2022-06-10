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
// router.get('/', function(req, res, next) {
//   res.render('home');
// });

router.get('/', function(req, res, next) {
    var sql = 'select * from task where style="否"';
    // var sql1 = 'select * from moredish';
    connection.query(sql, function(err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else {
            res.render('home', { data: result });
        }
    });
});

router.post('/', (req, res, next) => {
    var sql = 'UPDATE task SET style= ? WHERE id = ? ';
    connection.query(sql, ["是", req.body.ID], (err, result) => {
        if (err) {
            console.log
        }
    })
});

module.exports = router;