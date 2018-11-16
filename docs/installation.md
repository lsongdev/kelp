# Installation

firstly, download [node.js][node.js] from [node.js official website ][node.js], and ...

```bash
~$ mkdir myapp
~$ git init
~$ npm init
~$ npm install kelp --save
```

```js
const http = require('http');
const kelp = require('kelp');

const app = kelp();

app.use(async (req, res, next) => {
  res.end('hello world');
});

http.createServer(app).listen(3000);
```

---

[node.js]:(https://nodejs.org)