const http = require('http');
const kelp = require('..');

const app = kelp();

// number of middleware
var n = parseInt(process.env.MW || 1, 10);

console.log('  %d middleware', n);

while (n--) {
  app.use(function(req, res, next){
    next();
  });
}

var body = Buffer.from('Hello World');

app.use(async (req, res, next) => {
  res.statusCode = 200;
  res.end(body);
  next();
});

http.createServer(app).listen(3333);
