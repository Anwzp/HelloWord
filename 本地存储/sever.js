const experss = require('express');
const server = experss();
server.listen(8080);

server.use(experss.static('static'))