var fs = require('fs'),
    counter = 0,
    content;

module.exports = {

    // logger: function(ans) {
    //     return ans;
    // },

    meatballs: function(cb) {

        fs.readFile('./meatballs.txt', 'utf-8', function(err, data) {
            counter += 1;
            if (err) throw err;
            content = data.toString();
            cb(content);
        })
        
        
    }
}
