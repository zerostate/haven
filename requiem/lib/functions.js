(function () {
  var fns = {};
  
  // head :: [a] -> a
  fns.head = function (list) {
    return list[0];
  };
  
  // sum :: [Number] -> Number
  fns.sum = function (nums) {
    var acc = 0;
    for (var i=0; i<nums.length; i++) {
      acc += nums[i];
    }
    return acc;
  };
  
  module.exports = fns;
})();