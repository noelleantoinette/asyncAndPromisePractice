var chai = require('chai'),
    spies = require('chai-spies'),
    source = require('./billQuotes.js'),
    should = chai.should(),
    expect = require('chai').expect,
    assert = chai.assert;

chai.use(spies);



describe('Bill Murray quote finder', function() {
    
    it('returns content of ./billMurrayQuotes.txt', function(done) {
        source.textGetter(function(data) {
            expect(data).to.have.length(8940);
            done();
        })
    });

    it('should be type of string', function(done) {
        source.textGetter(function(data) {
           assert.typeOf(data, 'string');
           done();
        })
    });

    it('testing async', function(done) {
        source.asyncWTest("./billMurrayQuotes.txt", function(data) {
            expect(data).to.have.length(8940);
            done();
        });
    })

});



