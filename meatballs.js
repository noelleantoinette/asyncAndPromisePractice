var fs = require('fs'),
    Q = require('q'),
    content;


function test() {
    return 'test function ran';

};

var readfileerror = function(){
  return Q.nfcall(fs.readFile, './meatball.txt', 'utf-8')
    .then(function(data) {
        return data;
    })
    .fail(function(err) {
        console.log('error', err)
    })
    .done(function(){
      return 'all done!!'
    });
  };

///// Begin coding here!! ////////////






////////////////////////////////////////

exports.readfileerror = readfileerror;
exports.test = test;

