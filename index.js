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
    (function next(err){
      var middleware = app.stack[ ++i ];
      if(typeof middleware == 'function'){
        middleware.apply(self, [ req, res, next, err ]);
      }
    })();
  };
  /**
   * [stack description]
   * @type {Array}
   */
  app.stack  = [];
  /**
   * [function description]
   * @param  {[type]} middlewares [description]
   * @return {[type]}             [description]
   */
  app.use = function(middlewares){
    this.stack = [].concat.apply(this.stack, arguments);
    return app;
  };
  /**
   * expose
   */
  return app;
};
