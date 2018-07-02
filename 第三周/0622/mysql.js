//引入包
const express=require("express");
const mysql=require("mysql");
//启动服务
const servse =express();
//监听端口
servse.listen('8080');
//创建数据库连接获得数据连接对象
const db=mysql.createConnection({
    //ip地址 
    host:'localhost',
    //连接的用户名
    user:'root',
    //连接的密码
    password:'123',
    //数据库名
    database:'java'
})
//服务的方法
servse.get('/selet'/*访问路径*/,function(request,response){
    db.query('select * from dept'/*sql查询语句*/,function(err,data){
        response.send({data});
        response.end();
    })
})
//设置静态文件夹
servse.use(express.static("www"))
