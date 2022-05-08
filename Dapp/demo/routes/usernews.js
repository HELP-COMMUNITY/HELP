var express = require('express');
var router = express.Router();
var mysql = require('mysql');


router.get('/', function (req, res, next) {
  res.render('usernews');
});
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "help"
});
connection.connect();
//获取到注册页面的信息，并展示出来

router.get('/', function (req, res, next) {
  var sql = 'select * from register1';
  // var sql1 = 'select * from moredish';

  connection.query(sql, function (err, result, fields) {
      if (err) {
          console.log('err', err);
          return;
      } else { res.render('usernews', { data: result }); }
  });
});


module.exports = router;