var fs = require('fs'),
    Q = require('q'),
    content,
    response;


function returnOut(data) {
    response = data;
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


exports.returnOut = returnOut;
exports.quoteFinder = quoteFinder;
exports.textGetter = textGetter;
