const fs    = require('fs');
const path  = require('path');
const https = require('https');
const kelp  = require('../../');

const options = {
  key : fs.readFileSync(path.join(__dirname, 'certs', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'certs', 'cert.pem'))
};

const app = kelp();

app.use(function(req, res, next){
  res.end('hi');
});

const server = https.createServer(options, app);

server.listen(3000, function(err){
  console.log('server is running at https://kelp.lsong.org:%j', server.address().port)
});
