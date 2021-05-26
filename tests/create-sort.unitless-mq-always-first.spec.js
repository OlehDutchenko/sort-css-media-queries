const createSort = require('../lib/create-sort');

test(`mixed #1. mobile first. unitlessMqAlwaysFirst: FALSE`, () => {
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

test(`mixed #1. mobile first. unitlessMqAlwaysFirst: TRUE`, () => {
	const sort = createSort({
		unitlessMqAlwaysFirst: true
	});

	const receivedOrder = [
		'screen and (max-width: 640px)',
		'screen and (min-width: 980px)',
		'screen and (max-width: 980px)',
		'tv',
		'screen and (max-width: 768px)',
		'screen and (min-width: 640px)',
		'print',
		'screen and (hover: none)',
		'screen and (min-width: 1280px)',
		'screen',
		'screen and (min-width: 768px)',
		'screen and (max-width: 1280px)',
		'only screen'
	];

	const expectedOrder = [
		'only screen',
		'screen',
		'screen and (hover: none)',
		'tv',
		'screen and (min-width: 640px)',
		'screen and (min-width: 768px)',
		'screen and (min-width: 980px)',
		'screen and (min-width: 1280px)',
		'screen and (max-width: 1280px)',
		'screen and (max-width: 980px)',
		'screen and (max-width: 768px)',
		'screen and (max-width: 640px)',
		'print' // always last
	];

	const expected = expectedOrder.join('\n');
	const received = receivedOrder.sort(sort).join('\n');
	expect(received).toBe(expected);
});

test(`mixed #2. desktop first. unitlessMqAlwaysFirst: FALSE`, () => {
	const sort = createSort({
		unitlessMqAlwaysFirst: false
	}).desktopFirst;

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
		'screen and (max-width: 1280px)',
		'screen and (max-width: 980px)',
		'screen and (max-width: 768px)',
		'screen and (max-width: 640px)',
		'screen and (min-width: 640px)',
		'screen and (min-width: 768px)',
		'screen and (min-width: 980px)',
		'screen and (min-width: 1280px)',
		'screen',
		'tv',
		'print' // always last
	];

	const expected = expectedOrder.join('\n');
	const received = receivedOrder.sort(sort).join('\n');
	expect(received).toBe(expected);
});

test(`mixed #2. desktop first. unitlessMqAlwaysFirst: TRUE`, () => {
	const sort = createSort({
		unitlessMqAlwaysFirst: true
	}).desktopFirst;

	const receivedOrder = [
		'screen and (max-width: 640px)',
		'screen and (min-width: 980px)',
		'screen and (max-width: 980px)',
		'tv',
		'screen and (max-width: 768px)',
		'screen and (min-width: 640px)',
		'print',
		'screen and (hover: none)',
		'screen and (min-width: 1280px)',
		'screen',
		'screen and (min-width: 768px)',
		'screen and (max-width: 1280px)',
		'only screen'
	];

	const expectedOrder = [
		'only screen',
		'screen',
		'screen and (hover: none)',
		'tv',
		'screen and (max-width: 1280px)',
		'screen and (max-width: 980px)',
		'screen and (max-width: 768px)',
		'screen and (max-width: 640px)',
		'screen and (min-width: 640px)',
		'screen and (min-width: 768px)',
		'screen and (min-width: 980px)',
		'screen and (min-width: 1280px)',
		'print' // always last
	];

	const expected = expectedOrder.join('\n');
	const received = receivedOrder.sort(sort).join('\n');
	expect(received).toBe(expected);
});
