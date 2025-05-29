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

	it('should return 4 for [ 2, 2, 3, 3 ]', function() {
		expect(calculator.add([ 2, 2, 3, 3 ])).toEqual(4);
	});
});
