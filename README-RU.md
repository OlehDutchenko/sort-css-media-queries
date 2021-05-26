# sort-css-media-queries

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![types](https://img.shields.io/badge/types-TypeScript-blue)
![npm](https://img.shields.io/badge/node-6.3.0-yellow.svg)
![license](https://img.shields.io/badge/License-MIT-orange.svg)
![Test](https://github.com/dutchenkoOleg/sort-css-media-queries/workflows/Test/badge.svg)
[![Build Status](https://travis-ci.org/dutchenkoOleg/sort-css-media-queries.svg?branch=master)](https://travis-ci.org/dutchenkoOleg/sort-css-media-queries)

:us: [English](./README.md)
|
:ru: Русский язык

[![image](https://raw.githubusercontent.com/WezomCompany/code-style/main/assets/code-style-badge-white.svg)](https://github.com/WezomCompany/code-style)

> Пользовательский метод сортировки (mobile-first / desktop-first) для [`css-mqpacker`](https://www.npmjs.com/package/css-mqpacker) или [`pleeease`](https://www.npmjs.com/package/pleeease) (который использует css-mqpacker) или, возможно, для чего-то еще ))

## Альтернатива `mqpacker`

https://github.com/hail2u/node-css-mqpacker - устарел!  
Одним из альтернативных плагинов может послужить - [postcss-sort-media-queries](https://github.com/solversgroup/postcss-sort-media-queries)

## Использование в CSS-in-JS 🚀

Этот пакет теперь является частью [jss-plugin-sort-css-media-queries](https://www.npmjs.com/package/jss-plugin-sort-css-media-queries)

## Установка

```shell
npm install --save sort-css-media-queries
# or using yarn cli
yarn add sort-css-media-queries
```

## Использование

Для начала, ознакомтесь с оригинальной документацией https://www.npmjs.com/package/css-mqpacker#sort;

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

### mobile-first

Плагин будет сортировать Ваши медиа запросы в соответствии с mobile-first методологией. Последовательсноть медиа-запросов:

1. `min-width` и `min-height` от меньшего к большему,
1. `max-width` и `max-height` от большего к меньшему,
1. `min-device-width` и `min-device-height` от меньшего к большему,
1. `max-device-width` и `max-device-height` от большего к меньшему
1. медиа-запросы без значений размеров, `tv, ttp, ...`,
1. и в конце:
    - `print`
    - `print and (orientation: landscape)`
    - `print and (orientation: portrait)`

Пример

Входящий список медиа-запросов:

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

Результат сортировки:

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
const sortCSSmq = require('sort-css-media-queries');

// your cool code
// ...

postcss([
	mqpacker({
		sort: sortCSSmq.desktopFirst
	})
]).process(css);
```

Плагин будет сортировать Ваши медиа запросы в соответствии с desktop-first методологией. Последовательсноть медиа-запросов:

1. `max-width` и `max-height` от большего к меньшему,
1. `max-device-width` и `max-device-height` от большего к меньшему
1. `min-width` и `min-height` от меньшего к большему,
1. `min-device-width` и `min-device-height` от меньшего к большему,
1. медиа-запросы без значений размеров, `tv, ttp, ...`,
1. и в конце:
    - `print`
    - `print and (orientation: landscape)`
    - `print and (orientation: portrait)`

---

## Конфигурация сортировки

Вы можете создать файл `sort-css-mq.config.json` в корне вашего проекта
или добавить свойство `sortCssMQ: {}` в вашем `package.json`.

Теперь вы сможете контролировать процесс сортировки.

### Параметры конфигурации

#### `unitlessMqAlwaysFirst`

-   тип: `boolean | undefined`
-   дефолтное значение: `undefined`

---

## Использование методов сортировки напрямую

Вы можете импортировать отдельный хелпер сортировки из пакета
и создать собственный метод сортировки с конфигурацией при необходимости:

```js
import createSort from 'sort-css-media-queries/lib/create-sort';
const mySort = createSort(); // можно паратеры конфигурации => { unitlessMqAlwaysFirst: true, ... }

const myCssMqList = [
	/* ... */
];
myCssMqList.sort(mySort);
// or
myCssMqList.sort(mySort.desktopFirst);
```

---

## Информация о проекте

-   ["Релиз ноуты"](https://github.com/dutchenkoOleg/sort-css-media-queries/releases)
-   [Кодекс поведения](./CODE_OF_CONDUCT-RU.md)
-   [Лицензия MIT](./LICENSE)
