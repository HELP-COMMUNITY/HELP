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
  res.render('touch');
});

router.post('/', function (req, res, next) {
  var sql = 'insert into touch(name,text,time,tel,address) values(?,?,?,?,?)';
  connection.query(sql,[req.body.name,req.body.text,req.body.time,req.body.tel,req.body.address], function (err, result, fields) {
   
    if (err) {
      console.log('err', err);
      return;
  } else {
     
      res.redirect('/home');
  }
});
});
module.exports = router;