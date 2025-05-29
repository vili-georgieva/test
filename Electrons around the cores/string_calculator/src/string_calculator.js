// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	let sum= 0;
	for(let i = 0; i < string_numbers.length; i++) {
		if(string_numbers[i] % 2 == 1) {
			//string_numbers[i] = string_numbers[i] -1;
			sum += string_numbers[i] - 1;
		}	
		

	}
	return sum;
};
