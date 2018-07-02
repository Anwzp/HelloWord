const express=require("express");
const servlet=express();
//监听端口
servlet.listen("8080");
//设置访问路径以及对数据的处理和返回
servlet.get('/json',function(request,response){
    let str={"data":[
        {name:'贼胖',age:'18'},
        {name:'胖贼',age:'19'}
    ]};
    response.send(str);
    response.end;
})
//设置静态文件夹
servlet.use(express.static("www"));