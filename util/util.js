(function () {
  var fns = require('./lib/functions');
  var ops = require('./lib/ops');
  var types = require('./lib/types');
  
  module.exports = fns.merge([fns, ops, types]);
})();