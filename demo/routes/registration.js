var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('registration');
});
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "help"
});
connection.connect();


router.post('/', (req, res) => {
    if (req.body.pass !== req.body.cpass) {
        res.send('密码不一致');
    } else {
        var find = "select idcard,password from register where idcard = '" + req.body.idcard + "' and password = '" + req.body.pass + "'";
        var insertSql = 'insert into register(name,tel,idcard,password) values(?,?,?,?)';
        connection.query(find, function(err, result, fields) {
            if (err) {
                console.log('err', err);
                return;
            } else if (result.length > 0) {
                res.send('用户账号已经存在哟！')
            } else {
                connection.query(insertSql, [req.body.name, req.body.tel, req.body.idcard, req.body.pass], function(err, result, fields) {
                    res.redirect('/login');

                });
            }
        });
    }
});
module.exports = router;