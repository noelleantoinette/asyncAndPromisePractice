var fs = require('fs'),
    Q = require('q'),
    async = require('async'),
    content,
    response;


function errGet(error, data){

}

function returnOut(data) {
    return data;
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


function textGetter(cb) {
    fs.readFile("./billMurrayQuotes.txt", 'utf-8', function(err, data) {
        if (err) throw err;
        cb(data);
    })
};



function quoteFinder(num, text) {


}

function asyncWTest(input, done){
async.waterfall([
    function(cb){
        fs.readFile(input, "utf-8", cb);
    }
], done)
}

exports.asyncWTest = asyncWTest;
exports.returnOut = returnOut;
exports.quoteFinder = quoteFinder;
exports.textGetter = textGetter;
