const http = require('http');
const kelp = require('../');

const app = kelp();

app.use(function(req, res, next){
  res.end('hello!');
});

http.createServer(app).listen(3000);
