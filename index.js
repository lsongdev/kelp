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
    var self = this, i = -1, mw;
    (async function next(err) {
      mw = app.stack[++i];
      return mw && mw.call(self, req, res, next, err);
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