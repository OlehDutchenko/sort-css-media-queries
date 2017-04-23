# sort-css-media-queries

![npm](https://img.shields.io/badge/node-6.10.2-yellow.svg)
![es2015](https://img.shields.io/badge/ECMAScript-2015_(ES6)-blue.svg)

The custom `sort` method for [`css-mqpacker`](https://www.npmjs.com/package/css-mqpacker) or [`pleeease`](https://www.npmjs.com/package/pleeease) (which uses css-mqpacker) or, perhaps, something else ))

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

Sorry but here no tests yet.


## Contributing

you know what to do - [issues](https://github.com/dutchenkoOleg/sort-css-media-queries/issues) and [pulls](https://github.com/dutchenkoOleg/sort-css-media-queries/pulls)
