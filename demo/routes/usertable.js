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
  var sql = 'select * from register order by id desc limit 0,3';
  connection.query(sql, function (err, result, fields) {
      if (err) {
          console.log('err', err);
          return;
        } else { res.render('usertable', { data: result }); }
  });
});

router.get('/addpage',(req,res) =>{
  res.render('adduser',{obj:{},id:""});
});



router.post('/adduser',(req,res) => {
var find ="select name,idcard from register where name = '" + req.body.name + "' and idcard = '" + req.body.idcard + "'";
  var insertSql ="insert into register(name,tel,idcard,password) values(?,?,?,?)";
let a =[req.body.name,req.body.tel,req.body.idcard,req.body.password];
connection.query(find,function(err,result,fields){

if (err) {
  console.log('err', err);
  return;
} else if(result.length > 0){
  res.send('已经有这位用户了！')
}else{ 
  connection.query(insertSql, a, function (err, result, fields) {
  res.redirect('/usertable');

});
}
});
}) 

router.post('/', function (req, res, next) {

  var insql = 'select * from register where name=? or tel=? or idcard=? or password=?';
   
  connection.query(insql, [req.body.sea,req.body.sea,req.body.sea,req.body.sea], function (err, result, fields) {
    if (err) {
      console.log('err', err);
      return;
    } else { 
      if (result == '') {
        res.send('没有此用户哟！');
    }
    else{
      res.render('usertable', { data: result }); }
    }
});
});

router.get('/del/:id',(req,res) => {

      connection.query("delete from register where id='"+req.params.id+"'",function(){
      res.redirect('/usertable')
    })
  });

router.get('/updateuser/:id',(req,res)=>{
  connection.query("select * from register where id= ? ",[req.params.id],(err,result)=>{
res.render('updateuser',{obj:result[0]});
})
});

router.post('/updateuser',(req,res) =>{
  var sql ='update register set name=?,tel=?,idcard=?,password=? where id= ? '
  connection.query(sql,[req.body.name,req.body.tel,req.body.idcard,req.body.password,req.body.id], function (err, result, fields) {
    if (err) {
      console.log('err', err);
      return;
  } else {
      res.redirect('/usertable');
  }
});
});

router.get('/nextpage', function (req, res, next) {
  connection.query("select * from register order by id desc limit 3,6", function (err, result, fields) {
      if (err) {
          console.log('err', err);
          
        } else { res.render('usertable', { data: result }); }
      });
      });
      router.get('/lastpage', function (req, res, next) {
        connection.query("select * from register order by id desc limit 0,3", function (err, result, fields) {
            if (err) {
                console.log('err', err);
                
              } else { res.render('usertable', { data: result }); }
            });
            });
      


module.exports = router;
