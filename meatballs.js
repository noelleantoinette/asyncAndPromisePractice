var fs = require('fs'),
	Q = require('q'),
	Promise = Q.nfcall(),
	obj = {},
    content;


var logger = function(){
	console.log('this is from logd')
		
	},

	 meatballs = function(cb) {
        fs.readFile('./meatballs.txt', 'utf-8', function(err, data) {
            if (err) throw err;
            cb(data);
        })
    },

    typer = function(){
    	return (typeof Promise)
    },

    
    tester = Q.nfcall(logger)
    	.then(logger)
    	.catch(function(error){
    		console.log('this is error', error)
    	})
    








exports.logger = logger;
exports.meatballs = meatballs;
exports.typer = typer;
exports.tester = tester;
