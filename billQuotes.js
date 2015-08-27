var fs = require('fs'),
    Q = require('q'),
<<<<<<< HEAD
    async = require('async'),
=======
>>>>>>> 723960f472a7646ed5cf6bc787221ea792b4921c
    content,
    response;


<<<<<<< HEAD
function errGet(error, data){

}

function returnOut(data) {
    return data;
=======
function returnOut(data) {
    response = data;
>>>>>>> 723960f472a7646ed5cf6bc787221ea792b4921c
}


function splitter(x, how) {
    return x.split(how);
}

function compare(str, num) {
    return str == num;
}

function parse(y, func, z, compNum) {
    func(y, z).forEach(function(el0) {
        var len = el0.length;
        if (len < 4 && el0[len - 1] === ".") {
            var num = func(el0, "")
            num.pop()

            return !compare(num.join(""), compNum)

        }
    })
}


<<<<<<< HEAD
function textGetter(cb) {

    fs.readFile("./billMurrayQuotes.txt", 'utf-8', function(err, data) {

        if (err) throw err;
        //console.log('textGetter after error');
        cb(data);
    })
};



function quoteFinder(num, text) {


}

function asyncWTest(input, cb){
    async.waterfall([
        function(done){
            fs.readFile(input, "utf-8", function (err, data) {
                if (err) throw err;
                return done(data);
            });
        }
    ], function (data) {
        return cb(data);
    })
}

exports.asyncWTest = asyncWTest;
=======
function quoteFinder(num, text) {


}

function textGetter(cb) {
        fs.readFile("./billMurrayQuotes.txt", 'utf-8', function(err, data) {
            if (err) throw err;
         
            console.log(parse(data, splitter, " ", 1))
            cb(data);

        })
};

textGetter()


>>>>>>> 723960f472a7646ed5cf6bc787221ea792b4921c
exports.returnOut = returnOut;
exports.quoteFinder = quoteFinder;
exports.textGetter = textGetter;
