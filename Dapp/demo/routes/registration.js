var express = require('express');
var router = express.Router();
var alert =require('alert')

/* GET home page. */
router.get('/', function (req, res, next) {
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
    var find = "select tel,password from register where tel = '" + req.body.tel + "' and password = '" + req.body.pass + "'";
    var insertSql = 'insert into register1(tel,password) values(?,?)';
    connection.query(find, function (err, result, fields) {
      if (err) {
        console.log('err', err);
        return;
      } else if (result.length > 0) {
        alert('用户账号已经存在哟！')
      } else {
        connection.query(insertSql, [req.body.tel,req.body.pass], function (err, result, fields) {
          res.redirect('/login');

        });
      }
    });
  }
});
module.exports = router;