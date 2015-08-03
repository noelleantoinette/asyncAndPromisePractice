var fs = require('fs');

module.exports = {

    meatballs: function() {
        // return 'hello'
        fs.readFile('./meatballs.txt', function(err, data) {
            if (err) throw err;
           console.log(data)
            
        })
    }
}
