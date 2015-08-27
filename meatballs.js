var fs = require('fs'),
    Q = require('q'),
    content;
    

function test() {
    return 'test function ran';

};


//////////////////////////////////////
///// Begin coding here!! ////////////

function logger(content){
  console.log('THIS IS LOGGER', content.length);
}

function textSplitter(content){
  var output = content.split("\n")
  return output;
}

function meatballs(cb) {
    return fs.readFile('./meatballs.txt', 'utf-8', function(err, data) {
        if (err) throw err;
        cb(data);
    })
};


var secondTestFunc = function(data) {
    var scriptArr = data.split("\n");
    console.log('this is scriptaar', scriptArr.length)
    return scriptArr;
};


var readfileerror = function() {
    return Q.nfcall(fs.readFile, './meatball.txt', 'utf-8')
        .then(function(data) {
            return data;
        })
        .fail(function(err) {
            console.log('error', err)
        })
        .done(function() {
            return 'all done!!'
        });
};

function meatballs(cb) {
    fs.readFile('./meatballs.txt', 'utf-8', function(err, data) {
        if (err) throw err;
        cb(data);
    })
};

function typer() {
    return (typeof Promise, 'typer')
};


var practice = function(){

  return Q.nfcall(test)
    .then(function(){
      console.log('this is practice nfcall')
      
    })
    .catch(function(error) {
        console.log('this is error', error)
    });
  };

var readfile = function(){
  return Q.nfcall(fs.readFile, './meatballs.txt', 'utf-8')
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

  
var practice = function(){

  return Q.nfcall(test)
    .then(function(){
      console.log('this is practice nfcall')
      
    })
    .catch(function(error) {
        console.log('this is error', error)
    });
  };

var readfile = function() {
    return Q.nfcall(fs.readFile, './meatballs.txt', 'utf-8')
        .then(function(data) {
          console.log('this is typeof', typeof data)
            return data;
        })
        .then(function(data){
          secondTestFunc(data)
          
        })
        .fail(function(err) {
            console.log('error', err)
        })
        .done(function() {
            return 'all done!!'
        });
};



exports.readfileerror = readfileerror;
exports.test = test;
exports.meatballs = meatballs;
exports.logger = logger;
exports.textSplitter = textSplitter;
exports.readfile = readfile;
exports.practice = practice;



///////////////////////////////////////
///////////////////////////////////////

exports.test = test;