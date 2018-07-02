const express=require('express');
const app=express();
//监听端口
app.listen('8080');
//路由
let a=function(req,res,next){
    console.log(req);
    next();
}
let b=function(req,res,next){
    console.log(req);
}

app.route('/xz')
.get(function(req,res){
    res.download();
})
.post(function(req,res){
    res.send('post请求方式');
})
.put(function(req,res){
    let str={a:'s'};
        res.json(str);
});