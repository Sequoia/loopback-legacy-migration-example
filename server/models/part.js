var async = require('async');
module.exports = function(Part) {
    Part.getAll = function(skus, cb) {
      async.map(skus, Part.get, function (err, parts){
        if(err) return done(err);
        cb(null, parts);
      });
    }
     
    Part.remoteMethod(
        'getAll', 
        {
          accepts: {arg: 'skus', type: 'array'},
          returns: {arg: 'parts', type: 'array'}
        }
    );
};
