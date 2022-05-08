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

router.get('/', function (req, res, next) {
  var sql = 'select * from task order by id desc limit 0,3';
  connection.query(sql, function (err, result, fields) {
      if (err) {
          console.log('err', err);
          return;
        } else { res.render('tasktable', { data: result }); }
  });
});

router.get('/addpage',(req,res) =>{
  res.render('addtask',{obj:{},id:""});
});



router.post('/addtask',(req,res) => {
var find ="select name,text from task where name = '" + req.body.name + "' and text = '" + req.body.text + "'";
  var insertSql ="insert into task(name,text,uptime,downtime,money,photo,tel,address) values(?,?,?,?,?,?,?,?)";
let a =[req.body.name,req.body.text,req.body.uptime,req.body.downtime,req.body.money,req.body.photo,req.body.tel,req.body.address];
connection.query(find,function(err,result,fields){

if (err) {
  console.log('err', err);
  return;
} else if(result.length > 0){
  res.send('已存在相同的任务！')
}else{ 
  connection.query(insertSql, a, function (err, result, fields) {
  res.redirect('/tasktable');

});
}
});
}) 

router.post('/', function (req, res, next) {

  var insql = 'select * from task where name=? or text=? or uptime=? or downtime=? or money=? or photo=? or tel=? or address=?';
   
  connection.query(insql, [req.body.sea,req.body.sea,req.body.sea,req.body.sea,req.body.sea,req.body.sea,req.body.sea,req.body.sea], function (err, result, fields) {
    if (err) {
      console.log('err', err);
      return;
    } else { 
      if (result == '') {
        res.send('没有此用户哟！');
    }
    else{
      res.render('tasktable', { data: result }); }
    }
});
});

router.get('/del/:id',(req,res) => {

      connection.query("delete from task where id='"+req.params.id+"'",function(){
      res.redirect('/tasktable')
    })
  });

router.get('/updatetask/:id',(req,res)=>{
  connection.query("select * from task where id= ? ",[req.params.id],(err,result)=>{
res.render('updatetask',{obj:result[0]});
})
});

router.post('/updatetask',(req,res) =>{
  var sql ='update task set name=?,text=?,uptime=?,downtime=?,money=?,photo=?,tel=?,address=? where id= ? '
  connection.query(sql,[req.body.name,req.body.text,req.body.uptime,req.body.downtime,req.body.money,req.body.photo,req.body.tel,req.body.address,req.body.id], function (err, result, fields) {
    if (err) {
      console.log('err', err);
      return;
  } else {
      res.redirect('/tasktable');
  }
});
});

router.get('/nextpage', function (req, res, next) {
  connection.query("select * from task order by id desc limit 3,6", function (err, result, fields) {
      if (err) {
          console.log('err', err);
          
        } else { res.render('tasktable', { data: result }); }
      });
      });
      router.get('/lastpage', function (req, res, next) {
        connection.query("select * from task order by id desc limit 0,3", function (err, result, fields) {
            if (err) {
                console.log('err', err);
                
              } else { res.render('tasktable', { data: result }); }
            });
            });
      


module.exports = router;
