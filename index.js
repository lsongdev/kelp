'use strict';
module.exports = function Kelp(){
  /**
   * [app description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   * @return {[type]}     [description]
   */
  function app(req, res){
    var self = this, i = -1;
    (function next(){
      var middleware = app.stack[ ++i ];
      if(middleware){
        middleware(req, res, next);
      }
    })();
  };
  /**
   * [stack description]
   * @type {Array}
   */
  app.stack = [];
  /**
   * [function description]
   * @param  {[type]} middlewares [description]
   * @return {[type]}             [description]
   */
  app.use = function(middlewares){
    middlewares = [].slice.call(arguments);
    this.stack = this.stack.concat(middlewares);
    return app;
  };
  return app;
};
