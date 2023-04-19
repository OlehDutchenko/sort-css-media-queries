const sortCSSmq = require('../lib');

test(`simple #1. mobile-first`, () => {
	const receivedOrder = [
		'screen and (max-width: 640px)',
		'screen and (min-width: 980px)',
		'screen and (max-width: 980px)',
		'screen and (max-width: 768px)',
		'screen and (min-width: 640px)',
		'screen and (min-width: 1280px)',
		'screen and (min-width: 768px)',
		'screen and (max-width: 1280px)',
		'screen and (width < 640px)',
		'screen and (width >= 980px)',
		'screen and (width <= 980px)',
		'screen and (width <= 768px)',
		'screen and (width > 640px)',
		'screen and (width >= 1280px)',
		'screen and (width > 768px)',
		'screen and (width < 1280px)'
	];

	const expectedOrder = [
		'screen and (min-width: 640px)',
		'screen and (width > 640px)',
		'screen and (min-width: 768px)',
		'screen and (width > 768px)',
		'screen and (min-width: 980px)',
		'screen and (width >= 980px)',
		'screen and (min-width: 1280px)',
		'screen and (width >= 1280px)',
		'screen and (max-width: 1280px)',
		'screen and (width < 1280px)',
		'screen and (max-width: 980px)',
		'screen and (width <= 980px)',
		'screen and (max-width: 768px)',
		'screen and (width <= 768px)',
		'screen and (max-width: 640px)',
		'screen and (width < 640px)'
	];

	const expected = expectedOrder.join('\n');
	const received = receivedOrder.sort(sortCSSmq).join('\n');

	expect(received).toBe(expected);
});

test(`simple #1. desktop-first`, () => {
	const receivedOrder = [
		'screen and (max-width: 640px)',
		'screen and (min-width: 980px)',
		'screen and (max-width: 980px)',
		'screen and (max-width: 768px)',
		'screen and (min-width: 640px)',
		'screen and (min-width: 1280px)',
		'screen and (min-width: 768px)',
		'screen and (max-width: 1280px)',
		'screen and (width < 640px)',
		'screen and (width > 980px)',
		'screen and (width <= 980px)',
		'screen and (width < 768px)',
		'screen and (width > 640px)',
		'screen and (width >= 1280px)',
		'screen and (width >= 768px)',
		'screen and (width <= 1280px)'
	];

	const expectedOrder = [
		'screen and (width <= 1280px)',
		'screen and (max-width: 1280px)',
		'screen and (width <= 980px)',
		'screen and (max-width: 980px)',
		'screen and (width < 768px)',
		'screen and (max-width: 768px)',
		'screen and (width < 640px)',
		'screen and (max-width: 640px)',
		'screen and (width > 640px)',
		'screen and (min-width: 640px)',
		'screen and (width >= 768px)',
		'screen and (min-width: 768px)',
		'screen and (width > 980px)',
		'screen and (min-width: 980px)',
		'screen and (width >= 1280px)',
		'screen and (min-width: 1280px)'
	];

	const expected = expectedOrder.join('\n');
	const received = receivedOrder.sort(sortCSSmq.desktopFirst).join('\n');

	expect(received).toBe(expected);
});

test(`simple #2. mobile-first`, () => {
	const receivedOrder = [
		'screen and (max-width: 640px)',
		'screen and (max-width: 640px)',
		'screen and (min-width: 1280px)',
		'screen and (max-width: 640px)',
		'screen and (width < 640px)',
		'screen and (width < 640px)',
		'screen and (width > 1280px)',
		'screen and (width < 640px)'
	];

	const expectedOrder = [
		'screen and (min-width: 1280px)',
		'screen and (width > 1280px)',
		'screen and (max-width: 640px)',
		'screen and (max-width: 640px)',
		'screen and (max-width: 640px)',
		'screen and (width < 640px)',
		'screen and (width < 640px)',
		'screen and (width < 640px)'
	];

	const expected = expectedOrder.join('\n');
	const received = receivedOrder.sort(sortCSSmq).join('\n');

	expect(received).toBe(expected);
});

test(`simple #2. desktop-first`, () => {
	const receivedOrder = [
		'screen and (max-width: 640px)',
		'screen and (max-width: 640px)',
		'screen and (min-width: 1280px)',
		'screen and (max-width: 640px)',
		'screen and (width < 640px)',
		'screen and (width < 640px)',
		'screen and (width > 1280px)',
		'screen and (width < 640px)'
	];

	const expectedOrder = [
		'screen and (width < 640px)',
		'screen and (width < 640px)',
		'screen and (width < 640px)',
		'screen and (max-width: 640px)',
		'screen and (max-width: 640px)',
		'screen and (max-width: 640px)',
		'screen and (width > 1280px)',
		'screen and (min-width: 1280px)'
	];

	const expected = expectedOrder.join('\n');
	const received = receivedOrder.sort(sortCSSmq.desktopFirst).join('\n');

	expect(received).toBe(expected);
});

test(`simple #3. mobile-first`, () => {
	const receivedOrder = [
		'screen and (min-width: 640px)',
		'screen and (min-width: 0)',
		'screen and (width > 640px)',
		'screen and (width > 0)'
	];

	const expectedOrder = [
		'screen and (min-width: 0)',
		'screen and (width > 0)',
		'screen and (min-width: 640px)',
		'screen and (width > 640px)'
	];

	const expected = expectedOrder.join('\n');
	const received = receivedOrder.sort(sortCSSmq).join('\n');

	expect(received).toBe(expected);
});

test(`without dimension #1. mobile-first`, () => {
	const receivedOrder = [
		'tv',
		'print and (orientation: landscape)',
		'print and (orientation: portrait)',
		'print and (orientation: portrait)',
		'screen and (orientation: landscape)',
		'print',
		'screen and (orientation: portrait)',
		'print and (orientation: landscape)',
		'print and (orientation: portrait)'
	];

	const expectedOrder = [
		'screen and (orientation: landscape)',
		'screen and (orientation: portrait)',
		'tv',
		'print',
		'print and (orientation: landscape)',
		'print and (orientation: landscape)',
		'print and (orientation: portrait)',
		'print and (orientation: portrait)',
		'print and (orientation: portrait)'
	];

	const expected = expectedOrder.join('\n');
	const received = receivedOrder.sort(sortCSSmq).join('\n');

	expect(received).toBe(expected);
});

test(`without dimension #1. desktop-first`, () => {
	const receivedOrder = [
		'tv',
		'print and (orientation: landscape)',
		'print and (orientation: portrait)',
		'print and (orientation: portrait)',
		'screen and (orientation: landscape)',
		'print',
		'screen and (orientation: portrait)',
		'print and (orientation: landscape)',
		'print and (orientation: portrait)'
	];

	const expectedOrder = [
		'screen and (orientation: landscape)',
		'screen and (orientation: portrait)',
		'tv',
		'print',
		'print and (orientation: landscape)',
		'print and (orientation: landscape)',
		'print and (orientation: portrait)',
		'print and (orientation: portrait)',
		'print and (orientation: portrait)'
	];

	const expected = expectedOrder.join('\n');
	const received = receivedOrder.sort(sortCSSmq.desktopFirst).join('\n');

	expect(received).toBe(expected);
});

test(`mixed #1. mobile-first`, () => {
	const receivedOrder = [
		'tv',
		'print and (orientation: landscape)',
		'screen and (min-width: 1280px)',
		'screen and (width > 1280px)',
		'screen and (max-width: 640px)',
		'screen and (width < 640px)',
		'screen and (orientation: landscape)',
		'print',
		'screen and (orientation: portrait)',
		'screen and (min-width: 768px)',
		'screen and (width > 768px)',
		'screen and (max-width: 1280px)',
		'screen and (width < 1280px)',
		'print and (orientation: portrait)'
	];

	const expectedOrder = [
		'screen and (min-width: 768px)',
		'screen and (width > 768px)',
		'screen and (min-width: 1280px)',
		'screen and (width > 1280px)',
		'screen and (max-width: 1280px)',
		'screen and (width < 1280px)',
		'screen and (max-width: 640px)',
		'screen and (width < 640px)',
		'screen and (orientation: landscape)',
		'screen and (orientation: portrait)',
		'tv',
		'print',
		'print and (orientation: landscape)',
		'print and (orientation: portrait)'
	];

	const expected = expectedOrder.join('\n');
	const received = receivedOrder.sort(sortCSSmq).join('\n');

	expect(received).toBe(expected);
});

test(`mixed #1. desktop-first`, () => {
	const receivedOrder = [
		'tv',
		'print and (orientation: landscape)',
		'screen and (min-width: 1280px)',
		'screen and (width > 1280px)',
		'screen and (max-width: 640px)',
		'screen and (width < 640px)',
		'screen and (orientation: landscape)',
		'print',
		'screen and (orientation: portrait)',
		'screen and (min-width: 768px)',
		'screen and (width > 768px)',
		'screen and (max-width: 1280px)',
		'screen and (width < 1280px)',
		'print and (orientation: portrait)'
	];

	const expectedOrder = [
		'screen and (width < 1280px)',
		'screen and (max-width: 1280px)',
		'screen and (width < 640px)',
		'screen and (max-width: 640px)',
		'screen and (width > 768px)',
		'screen and (min-width: 768px)',
		'screen and (width > 1280px)',
		'screen and (min-width: 1280px)',
		'screen and (orientation: landscape)',
		'screen and (orientation: portrait)',
		'tv',
		'print',
		'print and (orientation: landscape)',
		'print and (orientation: portrait)'
	];

	const expected = expectedOrder.join('\n');
	const received = receivedOrder.sort(sortCSSmq.desktopFirst).join('\n');

	expect(received).toBe(expected);
});

test(`multiline #1. mobile-first`, () => {
	const receivedOrder = [
		`@media (min-width: 48em)
       and (max-width: 59.999em)`,
		`@media (min-width: 40em)
       and (max-width: 47.999em)`,
		`@media (min-width: 15em)
       and (max-width: 47.999em)`,
		`@media (min-width: 2em)
       and (max-width: 47.999em)`,
		`@media (min-width: 20em)
       and (max-width: 47.999em)`,
		`@media (min-width: 3em)
       and (max-width: 48.999em)`,
		`@media (min-width: 31em)
       and (max-width: 48.999em)`
	];

	const expectedOrder = [
		`@media (min-width: 2em)
       and (max-width: 47.999em)`,
		`@media (min-width: 3em)
       and (max-width: 48.999em)`,
		`@media (min-width: 15em)
       and (max-width: 47.999em)`,
		`@media (min-width: 20em)
       and (max-width: 47.999em)`,
		`@media (min-width: 31em)
       and (max-width: 48.999em)`,
		`@media (min-width: 40em)
       and (max-width: 47.999em)`,
		`@media (min-width: 48em)
       and (max-width: 59.999em)`
	];

	const expected = expectedOrder.join('\n');
	const received = receivedOrder.sort(sortCSSmq).join('\n');

	expect(received).toBe(expected);
});

test(`multiline #2. mobile-first`, () => {
	// Edge cases
	const receivedOrder = [
		`

    @media (min-width: 48em)


       and (max-width: 59.999em)

       `,
		`


              @media (min-width: 40em)

       and (max-width: 47.999em)


       `,
		`



    @media (min-width: 15em)



       and (max-width: 47.999em)



       `
	];

	const expectedOrder = [
		`



    @media (min-width: 15em)



       and (max-width: 47.999em)



       `,
		`


              @media (min-width: 40em)

       and (max-width: 47.999em)


       `,
		`

    @media (min-width: 48em)


       and (max-width: 59.999em)

       `
	];

	const expected = expectedOrder.join('\n');
	const received = receivedOrder.sort(sortCSSmq).join('\n');

	expect(received).toBe(expected);
});
