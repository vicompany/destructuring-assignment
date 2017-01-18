# Destructuring assignment

The `destructuring assignment` syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into variables.

How to extract the values is specified via `patterns`:

```javascript
const user = { first: 'John', last: 'Doe', age: 35 };
const numbers = [1, 2, 3, 4, 5];

// Object destructuring
const { first, age } = user; // John, 35;

// Array destructuring
const [a, b, c] = numbers; // 1, 2, 3
```

## When can it be used?

1. For variable declarations and assignments.
2. Parameter definitions.
3. In a `for-of` loop.

## Show me, where is the demo?

All destructuring tips and tricks are documented using unit tests. Just check the [test/test.js](test/test.js) file.

### Subjects

#### Basics

* [Object destructuring](test/test.js#L22)
* [Array destructuring](test/test.js#L43)
* [Using default values](test/test.js#L54)
* [Assign to new variable names](test/test.js#L74)

#### Advanced

* [Skip array values](test/test.js#L88)
* [Use the rest syntax](test/test.js#L98)
* [Swapping variables](test/test.js#L106)
* [Object parameter with default values](test/test.js#L117)

## More information

* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [Exploring ES6](http://exploringjs.com/es6/ch_destructuring.html)

## How to run the tests?

Clone the project and:

* Run `npm install`.
* Followed by `npm test` or `npm run watch`.
* Enjoy!
