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
  res.render('passwd');
});
router.post('/', (req, res) => {
  var selectSQL = " select tel,password from register where tel = '" + req.body.tel + "' and password = '" + req.body.pass + "'";
  var updateSql = 'update register set password=? where tel=? and password=?';
  connection.query(selectSQL, function (err, result, fields) {
    if (err) {
      console.log('err', err);
      return;
    } else {
if (result == '') {
        res.send('修改密码失败');
      }else{
connection.query(updateSql,[req.body.newpass,req.body.tel,req.body.pass],function (err,result,fields){
  res.redirect('/login');
})
          
        }
      }
      });
});
module.exports = router;