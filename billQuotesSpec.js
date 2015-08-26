var chai = require('chai'),
    spies = require('chai-spies'),
    source = require('./billQuotes.js'),
    should = chai.should(),
    expect = chai.expect(),
    assert = chai.assert;

chai.use(spies);

describe('Bill Murray quote finder', function() {
    
    it('returns content of ./billMurrayQuotes.txt', function() {
        source.textGetter(function() {
            expect(data).to.have.length(8940);
        })
        source.textGetter(function() {
           assert.typeOf(data, 'string');
        })
    });

    it('finds the quote by number', function(){


    })

});