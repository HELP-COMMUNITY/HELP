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
  res.render('setting');
});
router.post('/', function (req, res, next) {
  var sql = 'insert into user(name,tel,sex,text) values(?,?,?,?)';
  connection.query(sql,[req.body.name,req.body.tel,req.body.sex,req.body.text], function (err, result, fields) {
   
    if (err) {
      console.log('err', err);
      return;
  } else {
     
      res.redirect('/usernews');
  }
});
});

module.exports = router;