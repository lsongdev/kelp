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

app.use(function(req, res, next){
  res.end('hello!');
});

http.createServer(app).listen(3000);
````

### API

+ use

### Benchmarks

```bash
~$ npm run benchmark
```

> 2 GHz Intel Core i7 / 8 GB 1600 MHz DDR3 / v4.1.2

```bash
  1 middleware
  17710.10

  5 middleware
  19057.27

  10 middleware
  17320.05

  15 middleware
  16792.36

  20 middleware
  20580.80

  30 middleware
  16053.46

  50 middleware
  19124.45

  100 middleware
  16800.39
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
