/**
 * > Sorting test
 * @module path/to
 * @author Oleg Dutchenko <dutchenko.o.wezom@gmail.com>
 */

'use strict';

// ----------------------------------------
// Imports
// ----------------------------------------

const sortCSSmq = require('../');

// ----------------------------------------
// Helpers / Private
// ----------------------------------------

// randomize
function shuffleArray (array) {
	let newArray = array.concat();

	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = newArray[i];

		newArray[i] = newArray[j];
		newArray[j] = temp;
	}
	return newArray;
}

// ----------------------------------------
// Public
// ----------------------------------------

// correct sorted order
const queries = [
	// min-width/-height -> from smallest to largest
	'only screen and (min-width: 320px) and (max-width: 767px)',
	'screen and (min-height: 480px)',
	'screen and (min-height: 480px) and (min-width: 320px)',
	'only screen and (min-width: 640px)',
	'screen and (min-width: 1024px)',
	'only screen and (min-width: 1280px)',

	// device
	'only screen and (min-device-width: 320px) and (max-device-width: 767px)',

	// max-width/-height <- from largest to smallest
	'only screen and (max-width: 1023px)',
	'only screen and (max-height: 767px) and (min-height: 320px)',
	'only screen and (max-width: 767px) and (min-width: 320px)',
	'screen and (max-width: 639px)'
];

// shuffle it
const random = shuffleArray(queries);

// sort by module
random.sort(sortCSSmq);

// make strings for compare
const correct = queries.join(',');
const sorted = random.join(',');

// lets test
if (correct !== sorted) {
	let msg = [
		'',
		'ERROR -----------------',
		'sortCSSmq result should be same as correct!',
		'Correct sort',
		`- ${queries.join('\n- ')}`,
		'sortCSSmq result:',
		`- ${random.join('\n- ')}`,
		''
	].join('\n\n');

	console.log(msg);
	process.exit(1);
}
