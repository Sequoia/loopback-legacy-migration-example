var async = require('async');
module.exports = function(Part) {
  Part.getAll = function(skus, cb) {
    async.map(skus, Part.findById, function (err, parts){
      if(err) return cb(err);
      cb(null, parts);
    });
  }
};
