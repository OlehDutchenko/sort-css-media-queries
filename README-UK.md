# sort-css-media-queries

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![types](https://img.shields.io/badge/types-TypeScript-blue)
![npm](https://img.shields.io/badge/node-6.3.0-yellow.svg)
![license](https://img.shields.io/badge/License-MIT-orange.svg)
![Test](https://github.com/OlehDutchenko/sort-css-media-queries/workflows/Test/badge.svg)
[![Build Status](https://travis-ci.org/dutchenkoOleg/sort-css-media-queries.svg?branch=master)](https://travis-ci.org/dutchenkoOleg/sort-css-media-queries)

> Сортування медіазапитів: `mobile-first` та `desktop-first` для [`css-mqpacker`](https://www.npmjs.com/package/css-mqpacker) 
> та [`pleeease`](https://www.npmjs.com/package/pleeease) (котрий використовує css-mqpacker) та, можливо, для чогось ще ))

[![image](https://raw.githubusercontent.com/WezomCompany/code-style/main/assets/code-style-badge-white.svg)](https://github.com/WezomCompany/code-style)

---

##  Зміст

[🇬🇧 English](./README.md) | 🇺🇦 Українська

- [sort-css-media-queries](#sort-css-media-queries)
  - [Зміст](#зміст)
  - [Альтернатива `mqpacker`](#альтернатива-mqpacker)
  - [Використання в CSS-in-JS 🚀](#використання-в-css-in-js-)
  - [Встановлення](#встановлення)
  - [Використання](#використання)
    - [mobile-first](#mobile-first)
    - [desktop-first](#desktop-first)
  - [Конфігурація сортування](#конфігурація-сортування)
    - [Параметри конфігурації](#параметри-конфігурації)
      - [`unitlessMqAlwaysFirst`](#unitlessmqalwaysfirst)
  - [Інформація про проєкт](#інформація-про-проєкт)

## Альтернатива `mqpacker`

https://github.com/hail2u/node-css-mqpacker - є депрекейтнутим!  
Одним з альтернативных плагінів може бути - [postcss-sort-media-queries](https://github.com/solversgroup/postcss-sort-media-queries)

## Використання в CSS-in-JS 🚀

Пакет `sort-css-media-queries` використовується в [jss-plugin-sort-css-media-queries](https://www.npmjs.com/package/jss-plugin-sort-css-media-queries)

## Встановлення

```shell
npm install --save sort-css-media-queries
# or using yarn cli
yarn add sort-css-media-queries
```

## Використання

Для початку, ознайомтесь з оригінальною документацією:  
https://www.npmjs.com/package/css-mqpacker#sort

```js
import sortCSSmq from 'sort-css-media-queries';

// your cool code
// ...

postcss([
	mqpacker({
		sort: sortCSSmq
	})
]).process(css);
```

### mobile-first

Сортування медіазапит від мобільних пристроїв до десктопних.
Послідовність медіазапитів:

1. `min-width` та `min-height` від меньшого до більшого,
1. `max-width` та `max-height` від більшого до меншого,
1. `min-device-width` та `min-device-height` від меньшого до більшого,
1. `max-device-width` та `max-device-height` від більшого до меншого,
1. медіазапит без одиниць виміру: `tv, ttp, ...`
1. в кінці:
    - `print`
    - `print and (orientation: landscape)`
    - `print and (orientation: portrait)`

Приклад початкового коду:

```js
// min-width/-height -> from smallest to largest
'screen and (min-width: 320px) and (max-width: 767px)',
'screen and (min-height: 480px)',
'screen and (min-height: 480px) and (min-width: 320px)',
'screen and (min-width: 640px)',
'screen and (min-width: 1024px)',
'screen and (min-width: 1280px)',
// device
'screen and (min-device-width: 320px) and (max-device-width: 767px)',
// max-width/-height <- from largest to smallest
'screen and (max-width: 1023px)',
'screen and (max-height: 767px) and (min-height: 320px)',
'screen and (max-width: 767px) and (min-width: 320px)',
'screen and (max-width: 639px)',
// no units
'screen and (orientation: landscape)',
'screen and (orientation: portrait)',
'print',
'tv';
```

Результат сортування:

```js
'screen and (min-width: 320px) and (max-width: 767px)',
'screen and (min-height: 480px)',
'screen and (min-height: 480px) and (min-width: 320px)',
'screen and (min-width: 640px)',
'screen and (min-width: 1024px)',
'screen and (min-width: 1280px)',
'screen and (min-device-width: 320px) and (max-device-width: 767px)',
'screen and (max-width: 1023px)',
'screen and (max-height: 767px) and (min-height: 320px)',
'screen and (max-width: 767px) and (min-width: 320px)',
'screen and (max-width: 639px)',
'print',
'screen and (orientation: landscape)',
'screen and (orientation: portrait)',
'tv';
```

### desktop-first

```js
import sortCSSmq from 'sort-css-media-queries';

// your cool code
// ...

postcss([
	mqpacker({
		sort: sortCSSmq.desktopFirst
	})
]).process(css);
```

Сортування медіазапитів від десктопних пристроїв до мобільних. 
Послідовність медіазапитів:

1. `max-width` та `max-height` від більшого до меншого,
1. `min-width` та `min-height` від меньшого до більшого,
1. `max-device-width` та `max-device-height`від більшого до меншого,
1. `min-device-width` та `min-device-height` від меньшого до більшого,
1. медіазапит без одиниць виміру: `tv, ttp, ...`
1. в кінці:
    - `print`
    - `print and (orientation: landscape)`
    - `print and (orientation: portrait)`

---

## Конфігурація сортування

Ви можете імпортувати окремий хелпер сортування з пакета 
та створити власний метод сортування з конфігурацією за необхідності:

```js
import createSort from 'sort-css-media-queries/create-sort';
const sortCSSmq = createSort({ ...configuration });
```

Або створити файл `sort-css-mq.config.json` у корені вашого проєкту з необхідними опціями, 
або додати властивість `sortCssMQ: {}` у вашому `package.json`.

### Параметри конфігурації

#### `unitlessMqAlwaysFirst`

-   тип: `boolean | undefined`
-   дефолтне значення: `undefined`

---

## Інформація про проєкт

* [Release notes](https://github.com/OlehDutchenko/sort-css-media-queries/releases)
* [Contributor Covenant Code of Conduct](https://github.com/OlehDutchenko/sort-css-media-queries/blob/master/CODE_OF_CONDUCT.md)
* [License MIT](https://github.com/OlehDutchenko/sort-css-media-queries/blob/master/LICENSE)
