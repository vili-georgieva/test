// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	let height = 0;
	let width = 0;
	for (let i = 0; i < string_numbers.length; i++) {
		if (string_numbers[i] === '\n') {
			height++;
			width = 0;
		} else {
			width++;
		}
	}
	return [width, height];
};
