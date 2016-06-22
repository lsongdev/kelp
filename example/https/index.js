const fs    = require('fs');
const https = require('https');
const kelp  = require('kelp');

const options = {
  key : fs.readFileSync(__dirname + '/certs/key.pem'),
  cert: fs.readFileSync(__dirname + '/certs/cert.pem')
};

const app = kelp();

app.use(function(req, res, next){
  res.end('hi');
});

const server = https.createServer(options, app);

server.listen(4000, function(err){
  console.log('server is running at %s', server.address().port)
});
