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
const chalk = require('chalk');

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
	'screen and (min-width: 320px) and (max-width: 767px)',
	'screen and (min-height: 480px)',
	'screen and (min-height: 480px) and (min-width: 320px)',
	'screen and (min-width: 640px)',
	'screen and (min-width: 1024px)',
	'screen and (min-width: 1280px)',

	// device
	'screen and (min-device-width: 320px) and (max-device-width: 767px)',
	'screen and (min-device-width: 480px) and (max-device-width: 767px)',

	// max-width/-height <- from largest to smallest
	'screen and (max-width: 1023px)',
	'screen and (max-height: 767px) and (min-height: 320px)',
	'screen and (max-width: 767px) and (min-width: 320px)',
	'screen and (max-width: 639px)',

	// no units
	'print',
	'screen and (orientation: landscape)',
	'screen and (orientation: portrait)',
	'tv'
];

// shuffle it
const random = shuffleArray(queries);
const randomString = random.concat([]).join('\n');

const desktop = random.concat([]).sort(sortCSSmq.desktopFirst);
console.log(desktop);

// sort by module
const sorted = random.sort(sortCSSmq);

// make strings for compare
const queriesString = queries.join('\n');
const sortedString = sorted.join('\n');

console.log(chalk.blue('\n--------------'));
console.log(chalk.blue('\n MOBILE FIRST'));
console.log(chalk.blue('\n--------------'));
console.log(chalk.gray(randomString));

console.log(chalk.blue('\nentry mqs'));
console.log(chalk.gray(randomString));

console.log(chalk.blue('\nafter sort'));
console.log(chalk.gray(sortedString));

console.log(chalk.blue('\nshould be'));
console.log(chalk.gray(queriesString));

// lets test
if (queriesString !== sortedString) {
	let msg = [
		'',
		'ERROR -----------------',
		'sortCSSmq result should be same as correct!',
		'Correct sort',
		`- ${queries.join('\n- ')}`,
		'sortCSSmq result:',
		`- ${sorted.join('\n- ')}`,
		''
	].join('\n\n');

	console.log(msg);
	process.exit(1);
}
