# Destructuring assignment

The `destructuring assignment` syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables.

## Why should I use it?

It will make your code more terse and your life much easier.

## Examples

These examples use the following object:

```javascript
const user = {
  get fullname() {
    return `${this.name.first} ${this.name.last}`;
  },
  name: {
    first: 'John',
    last: 'Doe',
  },
  email: 'john@doe.com',
  nickname: 'Speedy John',
  avatar: 'me-at-work.jpg',
  skills: [
    'JavaScript',
    'Vue.js',
    'Sass',
    'Postcss',
  ],
};
```

```javascript
const { name, email } = user;

console.log(`Hi, my name is ${name}!`);
```

## More information

* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [Exploring ES6](http://exploringjs.com/es6/ch_destructuring.html)
