// var fs = require('fs');


var meatballs = function (){

	// return 'hello'
	fs.readFileSync('/meatballs.txt', function (err, data) {
  if (err) throw err;
  console.log(data);
})
};
