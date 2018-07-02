//引入包
const express=require("express")
const serve=express();
serve.listen(8080);
serve.use(express.static('cookie'))