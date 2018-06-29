const http = require('http');
const kelp = require('..');

const app = kelp();

const sleep = (n = 1) =>
  new Promise(done => setTimeout(done, n * 1e3));

app.use(async (req, res, next) => {
  console.log(1);
  await next();
  console.log(2);
});

app.use(async (req, res, next) => {
  console.log(3);
  await sleep();
  res.end(`hello world`);
  await next();
  console.log(4);
});

http.createServer(app).listen(3000);