# delay-decorator

An ES7 decorator for delaying function calls.

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

let promise = new Dog().makeNoise();
promise.then(noise => console.log(noise)); // Print "Woof!" after 2 seconds.
```
