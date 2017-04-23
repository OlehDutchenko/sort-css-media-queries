'use strict';

/**
 * The custom `sort` method for
 * for the [`css-mqpacker`](https://www.npmjs.com/package/css-mqpacker) or
 * [`pleeease`](https://www.npmjs.com/package/pleeease) which using `css-mqpacker`
 * or, perhaps, something else ))
 *
 * @module sort-css-media-queries
 * @author Oleg Dutchenko <dutchenko.o.wezom@gmail.com>
 * @version 1.0.0
 * @sourcecode |+16
 */

const minMaxWidth = /(!?\(\s*min(-device-)?-width).+\(\s*max(-device)?-width/;
const minWidth = /\(\s*min(-device)?-width/;
const maxMinWidth = /(!?\(\s*max(-device)?-width).+\(\s*min(-device)?-width/;
const maxWidth = /\(\s*max(-device)?-width/;

const isMinWidth = testQuery(minMaxWidth, maxMinWidth, minWidth);
const isMaxWidth = testQuery(maxMinWidth, minMaxWidth, maxWidth);

const minMaxHeight = /(!?\(\s*min(-device)?-height).+\(\s*max(-device)?-height/;
const minHeight = /\(\s*min(-device)?-height/;
const maxMinHeight = /(!?\(\s*max(-device)?-height).+\(\s*min(-device)?-height/;
const maxHeight = /\(\s*max(-device)?-height/;

const isMinHeight = testQuery(minMaxHeight, maxMinHeight, minHeight);
const isMaxHeight = testQuery(maxMinHeight, minMaxHeight, maxHeight);

/**
 * Sorting an array with media queries
 * @param {string} a
 * @param {string} b
 * @return {number} 1 / 0 / -1
 * @sourcecode
 */
export default function (a, b) {
	let minA = isMinWidth(a) || isMinHeight(a);
	let maxA = isMaxWidth(a) || isMaxHeight(a);
	
	let minB = isMinWidth(b) || isMinHeight(b);
	let maxB = isMaxWidth(b) || isMaxHeight(b);
	
	if (minA && maxB) {
		return -1;
	}
	if (maxA && minB) {
		return 1;
	}
	
	let lengthA = getQueryLength(a);
	let lengthB = getQueryLength(b);
	
	if (lengthA > lengthB) {
		if (maxA) {
			return -1;
		}
		return 1;
	}
	if (lengthA < lengthB) {
		if (maxA) {
			return 1;
		}
		return -1;
	}
	return a.localeCompare(b);
}

/**
 * Wrapper for creating test functions
 * @private
 * @param {RegExp} doubleTestTrue
 * @param {RegExp} doubleTestFalse
 * @param {RegExp} singleTest
 * @return {Function}
 * @sourcecode
 */
function testQuery (doubleTestTrue, doubleTestFalse, singleTest) {
	/**
	 * @param {string} query
	 * @return {boolean}
	 */
	return function(query) {
		if ( doubleTestTrue.test(query) ) {
			return true;
		} else if ( doubleTestFalse.test(query) ) {
			return false;
		}
		return singleTest.test(query);
	}
}

/**
 * Obtain the length of the media request in pixels.
 * Copy from original source `function inspectLength (length)`
 * {@link https://github.com/hail2u/node-css-mqpacker/blob/master/index.js#L58}
 * @private
 * @param {string} length
 * @return {number}
 * @sourcecode
 */
function getQueryLength (length) {
	length = /(-?\d*\.?\d+)(ch|em|ex|px|rem)/.exec(length);

	if (!length) {
		return Number.MAX_VALUE;
	}

	let num = length[1];
	let unit = length[2];

	switch (unit) {
		case "ch":
			num = parseFloat(num) * 8.8984375;
			break;

		case "em":
		case "rem":
			num = parseFloat(num) * 16;
			break;

		case "ex":
			num = parseFloat(num) * 8.296875;
			break;

		case "px":
			num = parseFloat(num);
			break;
	}

	return num;
}