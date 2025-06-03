//const { map } = require("jquery");

// StringCalculator.js

function findSpaceship(map) {
	const rows = map.trim().split('\n');
	const totalRows = rows.length;
  
	for (let i = 0; i < totalRows; i++) {
	  const row = rows[i];
	  const x = row.indexOf('X');
	  if (x !== -1) {
		const y = totalRows - 1 - i;
		return [x, y];
	  }
	}
  
	return "Spaceship lost forever.";
}
function StringCalculator() { }
StringCalculator.prototype.add = function (string_numbers) {
	let map = "..........\n" +
		"..........\n" +
		"..........\n" +
		".......X..\n" +
		"..........\n" +
		"..........";

	const [x_coordinate, y_coordinate] = findSpaceship(map);
	// console log
	//return [7, 2];
	return [x_coordinate, y_coordinate];
};
