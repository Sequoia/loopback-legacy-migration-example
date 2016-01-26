var fs = require('fs');
var csvParse = require('csv-parse');
var path = require('path');
var debug = require('debug')('app:partsList');

module.exports = function(PartsList) {
  PartsList.on('attached', function(app){

    PartsList.find = function(){
      var filter = arguments[0];
      var done = arguments[arguments.length-1];

      var filename = filter.where.productId + '.csv';
      var csvPath = path.join(app.get('partsListFilePath'), filename);

      //1. get list of related parts
      fs.readFile(csvPath, 'utf-8', function(err, res){
        if(err) return done(err);
        csvParse(res, function(err, partlist){
          if(err) return done(err);
          //parse the list from CSV
          var skus = partlist.map(function getSku(partTuple){
            return partTuple[1];
          });
          //2. look up values for each related record
          app.models.Part.getAll(skus,done);
        });
      });
    };

  });
};
