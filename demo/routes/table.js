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

router.get('/', function (req, res, next) {
  var sql = 'select * from touch order by id desc limit 0,3';
  connection.query(sql, function (err, result, fields) {
      if (err) {
          console.log('err', err);
          return;
        } else { res.render('table', { data: result }); }
  });
});
router.post('/', function (req, res, next) {

  var insql = 'select * from touch where name=? or text=? or tel=? or address=?';
   
  connection.query(insql, [req.body.sea,req.body.sea,req.body.sea,req.body.sea], function (err, result, fields) {
    if (err) {
      console.log('err', err);
      return;
    } else { 
      if (result == '') {
        res.send('没有这条反馈信息哟！');
    }
    else{
      res.render('table', { data: result }); }
    }
});
});

router.get('/del/:id',(req,res) => {

      connection.query("delete from touch where id='"+req.params.id+"'",function(){
      res.redirect('/table')
    })
  });

router.get('/updatetouch/:id',(req,res)=>{
  connection.query("select * from touch where id= ? ",[req.params.id],(err,result)=>{
res.render('updatetouch',{obj:result[0]});
})
});

router.post('/updatetouch',(req,res) =>{
  var sql ='update touch set name=?,text=?,tel=?,address=?,refer=? where id= ? '
  connection.query(sql,[req.body.name,req.body.text,req.body.tel,req.body.address,req.body.refer,req.body.id], function (err, result, fields) {
    if (err) {
      console.log('err', err);
      return;
  } else {
      res.redirect('/table');
  }
});
});

router.get('/nextpage', function (req, res, next) {
  connection.query("select * from touch order by id desc limit 3,6", function (err, result, fields) {
      if (err) {
          console.log('err', err);
          
        } else { res.render('table', { data: result }); }
      });
      });
      router.get('/lastpage', function (req, res, next) {
        connection.query("select * from touch order by id desc limit 0,3", function (err, result, fields) {
            if (err) {
                console.log('err', err);
                
              } else { res.render('table', { data: result }); }
            });
            });
      


module.exports = router;
