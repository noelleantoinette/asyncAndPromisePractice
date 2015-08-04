var expect = require('chai').expect,
	source = require('./meatballs.js');
	
describe('Bills first movie', function () {
	
	it('has a length of 8538', function (){
		source.meatballs(function(content){
			expect(content).to.equal('Meatballs (film)')
		})
	});

	it('has a description', function (){
		expect(typeof source.meatballs).to.equal('function');
	});

})
