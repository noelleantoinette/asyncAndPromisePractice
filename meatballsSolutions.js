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

  



function promisify(nodeAsyncFn, context) {
    return function() {
        var defer = Q.defer(),
            args = Array.prototype.slice.call(arguments);

        args.push(function(err, val) {
            if (err !== null) {
                return defer.reject(err);
            }

            return defer.resolve(val);
        });

        nodeAsyncFn.apply(context || {}, args);

        return defer.promise;
    };
};

exports.meatballs = meatballs;
exports.typer = typer;
exports.practice = practice;
exports.promisify = promisify;
exports.readfile = readfile;
