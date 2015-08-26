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

    it('attaches test function to Q.nfcall', function() {
        var spy = chai.spy(source.practice.nfcall);
        source.practice(function() {
            expect(spy).to.have.been.called();
        })
    });

    it('runs test function',
        function() {
            source.practice(function(data) {
                expect(data).to.equal('test function ran')
            })
        });

})


describe('fs.readFile and seperate paragraphs', function() {

    it('returns content of ./meatballs.txt', function() {
        source.meatballs(function() {
            expect(data).to.have.length(8539);

        });
        source.meatballs(function() {
            assert.typeOf(data, 'string')
        });
    });

    it('has a callback', function() {
        var spy = chai.spy(source.textSplitter);
        source.meatballs(function() {
            expect(spy).to.have.been.called()
        })
    })

    it('has a callback which splits data into an array containing paragraphs', function() {
        source.textSplitter('test \n test', function() {
            expect(data.length).to.equal(2)
        })

    })

})


describe('promisified fs.readfile', function() {

    it('returns entire text from meatballs.txt', function() {
        source.readfile(function() {
            expect(data).to.have.length(8539)
        });
    });

    it('converts data from file into an array containing paragraphs', function() {
        source.readfile(function(data) {
            assert.typeOf(data, 'array').with.length(112)
        })
    })

    it('returns confirmation of done()', function() {
        var spy = chai.spy(source.readfile.done);
        source.readfile(function(data) {
            expect(spy).to.have.been.called();
            expect(data).to.equal('all done!!');
        })
    });

    it('has an error handler', function() {
        var spy = chai.spy(source.readfile.fail);
        source.readfileerror(function() {
            expect(spy).to.have.been.called();
        })
    });

})
