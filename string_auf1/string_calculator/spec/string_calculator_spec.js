describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should find the spaceship at correct location', function() {

		expect(calculator.add('')).toEqual([7, 2]);
		});
});
