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
//   res.render('info');
// });
router.get('/', function(req, res, next) {
    var sql = 'select task.`name`,task.id,task.money,task.style,task.finsh from task ';
    connection.query(sql, function(err, result, fields) { if (err) { console.og('err', err); return; } else { res.render('info', { data: result }); } });
});
router.post('/', (req, res, next) => {
    var sql = 'UPDATE task SET finsh = ? WHERE id = ? ';
    connection.query(sql, ["完成", req.body.ID2], (err, result) => {
        if (err) {
            console.log
        }
    })
});

module.exports = router;