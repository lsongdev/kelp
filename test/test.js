'use strict';
const http   = require('http');
const assert = require('assert');
const kelp   = require('..');
//
const app = kelp()
.use(async (req, res, next) => {
  res.end('Hello, world!');
  await next();
});
//

describe('server', function () {

  const server = http.createServer(app);

  before(function(){
    server.listen(8000);
  });

  after(function () {
    server.close();
  });

  it('should return 200', function (done) {
    http.get('http://localhost:8000', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });

  it('should say "Hello, world!"', function (done) {
    http.get('http://localhost:8000', function (res) {
      var data = '';

      res.on('data', function (chunk) {
        data += chunk;
      });

      res.on('end', function () {
        assert.equal('Hello, world!', data);
        done();
      });
    });
  });
});
