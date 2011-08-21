(function () {
  var ops = {};

  // Doesn't work in the REPL.
  ops.doInstall = function () {
    try {
      if(head) { return; }
    }
    
    catch (err) {
      var  requiem = (require('../../requiem'));
      for (fn in requiem) {
          global[fn] = requiem[fn];
      }
    }
  };
  
  module.exports = ops;
})();