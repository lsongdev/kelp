## kelp ![npm](https://badge.fury.io/js/kelp.png) [![Build Status](https://travis-ci.org/song940/kelp.svg?branch=master)](https://travis-ci.org/song940/kelp)

dead simple nodejs http web framework :rocket:

### Installation
````
$ npm install kelp --save
````

### Example
````javascript
const http = require('http');
const kelp = require('kelp');

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
````

### API

+ use

### Benchmarks

```bash
~$ npm run benchmark
```

> MacBook Pro (Retina, 15-inch, Mid 2015) 2.2 GHz Intel Core i7 / 16 GB 1600 MHz DDR3 / 10.13.0

```bash
  1 middleware
  22756.60

  5 middleware
  21743.43

  10 middleware
  21241.57

  15 middleware
  19995.93

  20 middleware
  19074.04

  30 middleware
  18365.52

  50 middleware
  16786.10

  100 middleware
  12842.54
```

### Test

```bash
~$ npm test
```

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2016 lsong

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
