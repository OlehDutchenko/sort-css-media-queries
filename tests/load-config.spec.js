const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const loadConfig = require('../lib/load-config');
const defaultConfig = require('../sort-css-mq.config.json');

test('load default config', () => {
	const loadedConfig = loadConfig();
	expect(loadedConfig).toEqual(defaultConfig);
});

describe('load custom config', () => {
	const customConfig = { unitlessMqAlwaysFirst: true };
	const cwd = process.cwd();
	const testFolder = '.cache/tests/';
	mkdirp.sync(path.join(cwd, '.cache/tests/'));

	const testConfigPath = path.join(testFolder, 'sort-css-mq.config.json');
	const testConfigString = JSON.stringify(customConfig, undefined, '  ');
	fs.writeFileSync(testConfigPath, testConfigString);

	const testPkgPath = path.join(testFolder, 'pkg.json');
	const testPkgString = JSON.stringify({ sortCssMQ: customConfig }, undefined, '  ');
	fs.writeFileSync(testPkgPath, testPkgString);

	test('load from custom config file', () => {
		const loadedConfig = loadConfig(testConfigPath);
		expect(loadedConfig).toEqual(customConfig);
	});

	test('load from custom pkg file', () => {
		const loadedConfig = loadConfig('some-non-existent-file.json', testPkgPath);
		expect(loadedConfig).toEqual(customConfig);
	});
});
