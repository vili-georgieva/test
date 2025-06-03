describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should find the spaceship at correct location', function () {
		const map =
			"..........\n" +
			"..........\n" +
			"..........\n" +
			".......X..\n" +
			"..........\n" +
			"..........";
		expect(calculator.add(map)).toEqual([7, 2]);
	});
});
