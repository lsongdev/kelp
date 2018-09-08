'use strict';
/**
 * [exports Kelp]
 * @return {[type]} [description]
 */
function Kelp() {
  /**
   * [app http server handler]
   * @param  {[type]} req [request]
   * @param  {[type]} res [response]
   * @return {[type]}     [undefined]
   */
  function app(req, res) {
    let self = this, i = -1;
    (async function next(err) {
      const middleware = app.stack[++i];
      if (typeof middleware == 'function') {
        return middleware.call(self, req, res, next, err);
      }
    })();
  };
  /**
   * [stack middlewares]
   * @type {Array}
   */
  app.stack = [];
  /**
   * [function push middleware to stack]
   * @param  {[type]} middlewares [middlewares]
   * @return {[type]}             [application]
   */
  app.use = function (middlewares) {
    this.stack = [].concat.apply(this.stack, arguments);
    return app;
  };
  /**
   * expose
   */
  return app.use.apply(app, arguments);
};

module.exports = Kelp;