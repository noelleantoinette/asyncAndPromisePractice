var chai = require('chai'),
    spies = require('chai-spies'),
    source = require('./billQuotes.js'),
    should = chai.should(),
    expect = chai.expect(),
    assert = chai.assert;

chai.use(spies);

console.log(should, expect);



describe('Bill Murray quote finder', function() {
    
    it('returns content of ./billMurrayQuotes.txt', function() {
        source.textGetter(function(data) {
            expect(data).to.have.length(8940);
        })
        source.textGetter(function(data) {
           assert.typeOf(data, 'string');
        })
    });

    it('testing async', function(){
        source.asyncWTest("./billMurrayQuotes.txt",function(data){
            console.log(data, 'this is data')
            
        });
        expect(data).toEqual(80);

    })

});



