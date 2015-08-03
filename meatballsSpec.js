var expect = require('chai').expect,
	source = require('./meatballs.js');

	
describe('Bills first movie', function () {

	it('says hello', function (){
		expect(source.meatballs()).to.equal('hello');
	});

	it('has a description', function (){
		expect(typeof source.meatballs).to.equal('function');
	});
})

