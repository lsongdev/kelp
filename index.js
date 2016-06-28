'use strict';
/**
 * [exports Kelp]
 * @return {[type]} [description]
 */
module.exports = function Kelp(){
  /**
   * [app http server handler]
   * @param  {[type]} req [request]
   * @param  {[type]} res [response]
   * @return {[type]}     [undefined]
   */
  function app(req, res){
    var self = this, i = -1;
    (function next(err){
      var middleware = app.stack[ ++i ];
      if(typeof middleware == 'function'){
        middleware.apply(self, [ req, res, next ]);
      }
    })();
  };
  /**
   * [stack middlewares]
   * @type {Array}
   */
  app.stack  = [];
  /**
   * [function push middleware to stack]
   * @param  {[type]} middlewares [middlewares]
   * @return {[type]}             [application]
   */
  app.use = function(middlewares){
    this.stack = [].concat.apply(this.stack, arguments);
    return app;
  };
  /**
   * expose
   */
  return app.use.apply(app, arguments);
};
