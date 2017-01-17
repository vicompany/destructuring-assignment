const assert = require('assert');

const empty = () => 'Computer says no!';

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

describe('Object destructuring', () => {
	describe('fullname, email and nickname', () => {
		it('should match "John Doe", "john@doe.com" and "Speedy John"', () => {
			const { fullname, email, nickname } = user;

			assert.equal(fullname, 'John Doe');
			assert.equal(email, 'john@doe.com');
			assert.equal(nickname, 'Speedy John');
		});
	});

	describe('Nested "name" properties', () => {
		it('should match "John" and "Doe"', () => {
			const { name: { first, last } } = user;

			assert.equal(first, 'John');
			assert.equal(last, 'Doe');
		});
	});
});

describe('Array destructuring', () => {
	describe('First and second skill', () => {
		it('should match "JavaScript" and "Vue.js"', () => {
			const { skills: [first, second] } = user;

			assert.equal(first, 'JavaScript');
			assert.equal(second, 'Vue.js');
		});
	});
});

describe('Default values', () => {
	describe('Non-existing "wife" property', () => {
		it('should match "Tatjana"', () => {
			const { wife = 'Tatjana' } = user;

			assert.equal(wife, 'Tatjana');
		});
	});

	describe('Non-existing "say" property which uses a function call', () => {
		it('should match "Computer says no!"', () => {
			const { say = empty() } = user;

			assert.equal(say, 'Computer says no!');
		});
	});
});

describe('Assign to new variable names', () => {
	describe('Rename "nickname" to "nick" and "avatar" to "img"', () => {
		it('should match "Speedy John" and "me-at-work.jpg"', () => {
			const { nickname: nick, avatar: img } = user;

			assert.equal(nick, 'Speedy John');
			assert.equal(img, 'me-at-work.jpg');
		});
	});
});
