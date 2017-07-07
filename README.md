# sort-css-media-queries

![npm](https://img.shields.io/badge/node-6.3.0-yellow.svg)
![es2015](https://img.shields.io/badge/ECMAScript-2015_(ES6)-blue.svg)
![license](https://img.shields.io/badge/License-MIT-orange.svg)
[![Build Status](https://travis-ci.org/dutchenkoOleg/sort-css-media-queries.svg?branch=master)](https://travis-ci.org/dutchenkoOleg/sort-css-media-queries)

> The custom `sort` method for [`css-mqpacker`](https://www.npmjs.com/package/css-mqpacker) or [`pleeease`](https://www.npmjs.com/package/pleeease) (which uses css-mqpacker) or, perhaps, something else ))

[![js happiness style](https://cdn.rawgit.com/JedWatson/happiness/master/badge.svg)](https://github.com/JedWatson/happiness)

## Installing

```shell
npm install --save sort-css-media-queries
# or using yarn cli
yarn add sort-css-media-queries
```

## Usage

See the original docs at first https://www.npmjs.com/package/css-mqpacker#sort;

```js

const sortCSSmq = require('sort-css-media-queries');

// your cool code
// ...

postcss([
  mqpacker({
    sort: sortCSSmq
  })
]).process(css);

```

### Warn

it's use es6 syntax

- ECMAScript 2015 (ES6) and beyond - https://nodejs.org/en/docs/es6/
- Node.js ES2015 Support - http://node.green/ 


## Tests

1. `npm test` for testing js code style and test sorting method
1. `npm run fix` for automatically fix most of problems with **js code style** 

## Changelog

Please read [CHANGELOG.md](https://github.com/dutchenkoOleg/sort-css-media-queries/blob/master/CHANGELOG.md)


## Contributing

you know what to do - [issues](https://github.com/dutchenkoOleg/sort-css-media-queries/issues) and [pulls](https://github.com/dutchenkoOleg/sort-css-media-queries/pulls)
