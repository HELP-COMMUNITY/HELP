var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
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
        res.send('登录失败');
      }else {
        if (req.body.tel == "18879828237" && req.body.password == 123) {
          res.redirect("/");
  } else {
          res.redirect('/home');
        }
      }
      }
    });
});

module.exports = router;