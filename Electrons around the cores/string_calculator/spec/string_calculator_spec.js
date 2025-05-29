describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	/*it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual(0);
	});*/

	it('should return 6 for [ 1, 2, 3, 4, 5 ]', function() {
		expect(calculator.add([ 1, 2, 3, 4, 5 ])).toEqual(6);
	});
});
