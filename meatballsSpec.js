var expect = require('chai').expect,
    source = require('./meatballs.js');

describe('Bills first movie', function() {

    it('returns text from meatballs.txt', function() {
        source.meatballs(function(data) {
            expect(data).to.equal('Meatballs (film)')
        })
    });

    it('is an object', function() {
        expect(source.typer()).to.equal('object');
    });

    it('has a then function', function (){
    	expect(source.tester()).to.equal('i dont know')
    })

})
