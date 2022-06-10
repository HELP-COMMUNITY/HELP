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
    res.render('task');
});

router.post('/', function(req, res, next) {
    var sql = 'insert into task(id,name,text,downtime,money,photo,tel,address,style,finsh) values(?,?,?,?,?,?,?,?,?,?)';
    connection.query(sql, [req.body.id, req.body.name, req.body.text, req.body.downtime, req.body.money, "/images/" + req.body.photo, req.body.tel, req.body.address, "否", "未完成"], function(err, result, fields) {

        if (err) {
            console.log('err', err);
            return;
        }
    });
});

module.exports = router;