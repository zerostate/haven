(function () { // util.lib.functions
  var fns = {};
  
  // merge :: [Objects] -> Object
  fns.merge = function (objs) {
    var obj = {};
    
    for(var i=0; i<objs.length; i++) {
      for (key in objs[i]) {
        obj[key] = objs[i][key];
      }
    }
    
    return obj;
  };
  
  module.exports = fns;
})();