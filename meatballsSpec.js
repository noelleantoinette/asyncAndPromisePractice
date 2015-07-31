describe('Bills first movie', function () {

	it('says hello', function (){
		expect(meatballs()).toEqual('hello');
	});

	it('has a description', function (){
		expect(typeof meatballs).toBe('function');
	});
})