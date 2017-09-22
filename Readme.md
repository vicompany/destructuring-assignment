# Destructuring assignment workshop

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

## I want to learn this

All destructuring tips and tricks are covered using (failing) unit tests. It's up to you to make the tests pass. You can use the [test/workshop.js](test/workshop.js) file.

## More information

* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [Exploring ES6](http://exploringjs.com/es6/ch_destructuring.html)

## How to run the tests?

Clone the project and:

* Run `npm install`.
* Followed by `npm test` or `npm start` to watch.
* Enjoy!
