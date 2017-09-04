# sort-css-media-queries

![npm](https://img.shields.io/badge/node-6.3.0-yellow.svg)
![es2015](https://img.shields.io/badge/ECMAScript-2015_(ES6)-blue.svg)
![license](https://img.shields.io/badge/License-MIT-orange.svg)
[![Build Status](https://travis-ci.org/dutchenkoOleg/sort-css-media-queries.svg?branch=master)](https://travis-ci.org/dutchenkoOleg/sort-css-media-queries)


:us: [English](./README.md)
|
:ru: Русский язык

> Пользовательский метод сортировки (mobile-first) для [`css-mqpacker`](https://www.npmjs.com/package/css-mqpacker) или [`pleeease`](https://www.npmjs.com/package/pleeease) (который использует css-mqpacker) или, возможно, для чего-то еще ))

[![js happiness style](https://cdn.rawgit.com/JedWatson/happiness/master/badge.svg)](https://github.com/JedWatson/happiness)

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

Плагин будет сортировать Ваши медио запросы в соответствии и mobile-first методологией. Последовательсноть меедиа-запросов:

1. `min-width` и `min-height`  от меньшего к большему,
1. `max-width` и `max-height` от большего к меньшему,
1. `min-device-width` и `min-device-height`  от меньшего к большему,
1. `max-device-width` и `max-device-height` от большего к меньшему
1. медиа-запросы без значений размеров, например `print, tv, ...`.

Пример

Входящий список медиа-запросов:

```js
// min-width/-height -> from smallest to largest
'only screen and (min-width: 320px) and (max-width: 767px)',
'screen and (min-height: 480px)',
'screen and (min-height: 480px) and (min-width: 320px)',
'only screen and (min-width: 640px)',
'screen and (min-width: 1024px)',
'only screen and (min-width: 1280px)',

// device
'only screen and (min-device-width: 320px) and (max-device-width: 767px)',

// max-width/-height <- from largest to smallest
'only screen and (max-width: 1023px)',
'only screen and (max-height: 767px) and (min-height: 320px)',
'only screen and (max-width: 767px) and (min-width: 320px)',
'screen and (max-width: 639px)',

// no units
'only screen and (orientation: landscape)',
'only screen and (orientation: portrait)',
'print',
'tv'
```

Результат сортировки:

```js
'only screen and (min-width: 320px) and (max-width: 767px)',
'screen and (min-height: 480px)',
'screen and (min-height: 480px) and (min-width: 320px)',
'only screen and (min-width: 640px)',
'screen and (min-width: 1024px)',
'only screen and (min-width: 1280px)',
'only screen and (min-device-width: 320px) and (max-device-width: 767px)',
'only screen and (max-width: 1023px)',
'only screen and (max-height: 767px) and (min-height: 320px)',
'only screen and (max-width: 767px) and (min-width: 320px)',
'screen and (max-width: 639px)',
'only screen and (orientation: landscape)',
'only screen and (orientation: portrait)',
'print',
'tv'
```


## Тесты

1. `npm run sort` - тестирование метода сортировки
1. `npm run happiness` - тестирование стиля JavaScript кода
1. `npm test`: `npm run sort` + `npm run happiness`

---

## Информация о проекте

* [История изменений](./CHANGELOG-RU.md)
* [Руководство по содействию проекту](./CONTRIBUTING-RU.md)
* [Кодекс поведения](./CODE_OF_CONDUCT-RU.md)
* [Лицензия MIT](./LICENSE)
