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

router.get('/', function(req, res, next) {
    var sql = 'select * from register order by id desc limit 0,3';
    connection.query(sql, function(err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else { res.render('basic_usertable', { data: result }); }
    });
});
router.post('/', function(req, res, next) {

    var insql = 'select * from register where name=? or tel=? or idcard=? or password=?';

    connection.query(insql, [req.body.name, req.body.tel, req.body.idcard, req.body.pass], function(err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else {
            if (result == '') {
                res.send('没有此用户哟！');
            } else {
                res.render('basic_usertable', { data: result });
            }
        }
    });
});

router.get('/del/:id', (req, res) => {

    connection.query("delete from register where id='" + req.params.id + "'", function() {
        res.redirect('/basic_usertable')
    })
});

router.get('/updateindex/:id', (req, res) => {
    connection.query("select * from register where id= ? ", [req.params.id], (err, result) => {
        res.render('updateindex', { obj: result[0] });
    })
});

router.post('/updateindex', (req, res) => {
    var sql = 'update register set name=? or tel=? or idcard=? or password=? '
    connection.query(sql, [req.body.name, req.body.tel, req.body.idcard, req.body.pass], function(err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else {
            res.redirect('/basic_usertable');
        }
    });
});

router.get('/nextpage', function(req, res, next) {
    connection.query("select * from register order by id desc limit 3,6", function(err, result, fields) {
        if (err) {
            console.log('err', err);

        } else { res.render('basic_usertable', { data: result }); }
    });
});
router.get('/lastpage', function(req, res, next) {
    connection.query("select * from register order by id desc limit 0,3", function(err, result, fields) {
        if (err) {
            console.log('err', err);

        } else { res.render('basic_usertable', { data: result }); }
    });
});



module.exports = router;