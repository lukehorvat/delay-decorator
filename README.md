# delay-decorator [![NPM version](http://img.shields.io/npm/v/delay-decorator.svg?style=flat-square)](https://www.npmjs.org/package/delay-decorator) [![Build status](http://img.shields.io/travis/lukehorvat/delay-decorator.svg?style=flat-square)](https://travis-ci.org/lukehorvat/delay-decorator)

An ES7 decorator for delaying function calls. Uses [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout) internally.

## Installation

Install the package with NPM:

```bash
$ npm install delay-decorator
```

## Usage

The following example should be self-explanatory:

```javascript
import delay from "delay-decorator";

class Dog {
  @delay(2000)
  makeNoise() { return "Woof!" }
}

let dog = new Dog();
let promise = dog.makeNoise();
promise.then(noise => console.log(noise)); // Print "Woof!" after 2 seconds.
```
