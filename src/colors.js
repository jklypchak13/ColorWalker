/**
 * Helper Module containing color related functions.
 */

/**
 * Convert the given number to a HEX component in a color.
 * @param {Number} c the number between 0 and 255
 */
function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

/**
 * Generate a random HSL color
 */
export function randomColorHSL() {
	return "hsl(" + random(0, 360) + ", 100%, 50%";
}

/**
 * Generate a random RGB color
 */
export function randomColorRGB() {
	return (
		"#" +
		componentToHex(random(0, 255)) +
		componentToHex(random(0, 255)) +
		componentToHex(random(0, 255))
	);
}

/**
 * Generate a random integer between the two given values
 * @param {Number} start the starting value of the range
 * @param {Number} end the ending value of the range
 */
export function random(start, end) {
	let a = Math.floor(Math.random() * (end - start + 1)) + start;
	return a;
}
