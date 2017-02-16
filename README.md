[js-complex](http://aureooms.github.io/js-complex)
==

Complex numbers code bricks for JavaScript.

```js
let kernel = complex.cartesian.kernel.compile( number , "i" ) ;
let { add , sub , mul , div } = complex.cartesian.array.compile( kernel ) ;
```

[![License](https://img.shields.io/github/license/aureooms/js-complex.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-complex/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-complex.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-complex)
[![Bower version](https://img.shields.io/bower/v/@aureooms/js-complex.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-complex)
[![Build Status](https://img.shields.io/travis/aureooms/js-complex.svg?style=flat)](https://travis-ci.org/aureooms/js-complex)
[![Coverage Status](https://img.shields.io/coveralls/aureooms/js-complex.svg?style=flat)](https://coveralls.io/r/aureooms/js-complex)
[![Dependencies Status](https://img.shields.io/david/aureooms/js-complex.svg?style=flat)](https://david-dm.org/aureooms/js-complex#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/aureooms/js-complex.svg?style=flat)](https://david-dm.org/aureooms/js-complex#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/aureooms/js-complex.svg?style=flat)](https://codeclimate.com/github/aureooms/js-complex)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-complex.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-complex)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-complex.svg?style=flat)](https://github.com/aureooms/js-complex/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-complex.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-complex)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-complex
# or
jspm install npm:@aureooms/js-complex
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-complex
```

### bower
```terminal
bower install @aureooms/js-complex
```

### ender
```terminal
ender add @aureooms/js-complex
```

### jam
```terminal
jam install @aureooms/js-complex
```

### spm
```terminal
spm install @aureooms/js-complex --save
```

### npm
```terminal
npm install @aureooms/js-complex --save
```

## Require
### jspm
```js
let complex = require( "github:aureooms/js-complex" ) ;
// or
import complex from '@aureooms/js-complex' ;
```
### duo
```js
let complex = require( "aureooms/js-complex" ) ;
```

### component, ender, spm, npm
```js
let complex = require( "@aureooms/js-complex" ) ;
```

### bower
The script tag exposes the global variable `complex`.
```html
<script src="bower_components/@aureooms/js-complex/js/dist/complex.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-complex" ] , function ( complex ) { ... } ) ;
```
