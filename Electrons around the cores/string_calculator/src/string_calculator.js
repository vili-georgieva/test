// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	let sum= 0;
	for(let i = 0; i < string_numbers.length; i++) {
		if(string_numbers[i] > 2) {
			sum += 2;
		}	
		

	}
	return sum;
};
