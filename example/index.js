const http = require('http');
const kelp = require('../');

const app = kelp(function(req, res){
  res.end('test');
});

http.createServer(app).listen(3000);
