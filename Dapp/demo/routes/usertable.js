var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var alert =require('alert')
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
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
var find ="select tel,password from register where tel = '" + req.body.tel + "' and password = '" + req.body.password + "'";
  var insertSql ="insert into register(tel,password) values(?,?)";
let a =[req.body.tel,req.body.password];
connection.query(find,function(err,result,fields){

if (err) {
  console.log('err', err);
  return;
} else if(result.length > 0){
  alert('已经有这位用户了！')
}else{ 
  connection.query(insertSql, a, function (err, result, fields) {
  res.redirect('/usertable');

});
}
});
}) 

router.post('/', function (req, res, next) {

  var insql = 'select * from register where  tel=? or password=?';
   
  connection.query(insql, [req.body.sea,req.body.sea], function (err, result, fields) {
    if (err) {
      console.log('err', err);
      return;
    } else { 
      if (result == '') {
        alert('没有此用户哟！');
    }
    else{
      res.render('usertable', { data: result }); }
    }
});
});

router.get('/del/:id',(req,res) => {
     if(req.params.id==35){
       alert('不可以删除admin超级用户哟！')
     }else{
      connection.query("delete from register where id='"+req.params.id+"'",function(){
        res.redirect('/usertable')
      })
     }
  });

router.get('/updateuser/:id',(req,res)=>{
  if(req.params.id==35){
    alert('不可以修改admin超级用户哟！')
  }else{
   connection.query("update register set tel=?,password=? where id= ?",[req.body.tel,req.body.password,req.body.id],function(){
     res.redirect('/usertable')
   })
  }
});
router.post('/updateuser',(req,res) =>{
  var sql ='update register set tel=?,password=? where id= ? '
  connection.query(sql,[req.body.tel,req.body.password,req.body.id], function (err, result, fields) {
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
