const createSort = require('../lib/create-sort');

test(`unitlessMqAlwaysFirst: FALSE`, () => {
	const sort = createSort({
		unitlessMqAlwaysFirst: false
	});

	const receivedOrder = [
		'screen and (max-width: 640px)',
		'screen and (min-width: 980px)',
		'screen and (max-width: 980px)',
		'tv',
		'screen and (max-width: 768px)',
		'screen and (min-width: 640px)',
		'print',
		'screen and (min-width: 1280px)',
		'screen',
		'screen and (min-width: 768px)',
		'screen and (max-width: 1280px)'
	];

	const expectedOrder = [
		'screen and (min-width: 640px)',
		'screen and (min-width: 768px)',
		'screen and (min-width: 980px)',
		'screen and (min-width: 1280px)',
		'screen and (max-width: 1280px)',
		'screen and (max-width: 980px)',
		'screen and (max-width: 768px)',
		'screen and (max-width: 640px)',
		'screen',
		'tv',
		'print' // always last
	];

	const expected = expectedOrder.join('\n');
	const received = receivedOrder.sort(sort).join('\n');
	expect(received).toBe(expected);
});

test(`unitlessMqAlwaysFirst: TRUE`, () => {
	// eslint-disable-next-line no-unused-vars
	const sort = createSort({
		unitlessMqAlwaysFirst: true
	});

	// TODO add test cases
	expect(true).toBe(true);
});
