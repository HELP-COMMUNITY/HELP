var express = require('express');
var router = express.Router();
var alert=require('alert');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "help"
});
connection.connect();
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login');
});

router.post('/', (req, res) => {
var selectSQL = " select tel,password from register where tel = '" + req.body.tel + "' and password = '" + req.body.password + "'";
  connection.query(selectSQL, function (err, result, fields) {
    if (err) {
      console.log('err', err);
      return;
    } else {
if (result == '') {
  alert("登录失败");
      }else {
        if (req.body.tel == "admin" && req.body.password == 123456) {
          res.redirect("/usertable");
  } else {
          res.redirect('/home');
        }
      }
      }
    });
});

module.exports = router;