var express      = require('express')
var cookieParser = require('cookie-parser')
var app = express()
app.use(cookieParser())
app.listen(8080);
let i=0;
app.get('/cook',function (res,req) {
   req.cookie('sessionId','1',{HttpOnly:true});
    i++;
    req.send([i]);
    req.end();
})
app.use(express.static('static'))