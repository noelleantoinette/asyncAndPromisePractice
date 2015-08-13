var chai = require('chai'),
    spies = require('chai-spies'),
    source = require('./meatballs.js'),
    should = chai.should(),
    expect = chai.expect(),
    assert = chai.assert;

chai.use(spies);


describe('practice promisified function', function() {
    

    it('is a function', function() {
        assert.typeOf(source.practice, 'function');

    });

    it('attaches logger function to Q.nfcall', function() {
        var spy = chai.spy(source.practice.nfcall);

        source.practice(function() {
            expect(spy).to.have.been.called();
        })
    });

    it('runs logger function',
        function() {
            source.practice(function(data) {
                expect(data).to.equal('test function ran')
            })
        });

})

describe('Bills first movie', function() {
    

    it('returns text from meatballs.txt', function() {
        source.readfile(function(data) {
            expect(data).to.have.length(8539)
        })
    });

    it('returns confirmation of done()', function() {
        source.readfile(function(data) {
            expect(data).to.equal('all done!!')
        })
    });

    it('has an error handler', function() {
        var spy = chai.spy(source.readfile.fail);
        source.readfileerror(function() {
            expect(spy).to.have.been.called();
        })
    });

})
