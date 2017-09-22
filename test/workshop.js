const assert = require('assert');

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
			assert.equal(fullname, 'John Doe');
			assert.equal(email, 'john@doe.com');
			assert.equal(nickname, 'Speedy John');
		});
	});

	describe('Nested "name" properties', () => {
		it('should match "John" and "Doe"', () => {
			assert.equal(first, 'John');
			assert.equal(last, 'Doe');
		});
	});
});

describe('Array destructuring', () => {
	describe('First and second skill', () => {
		it('should match "JavaScript" and "Vue.js"', () => {
			assert.equal(first, 'JavaScript');
			assert.equal(second, 'Vue.js');
		});
	});
});

describe('Default values', () => {
	describe('Non-existing "wife" property', () => {
		it('should match "Tatjana"', () => {
			assert.equal(wife, 'Tatjana');
		});
	});

	describe('Non-existing "say" property which uses the result of a function call', () => {
		const empty = () => 'Computer says no!';

		it('should match "Computer says no!"', () => {
			assert.equal(say, 'Computer says no!');
		});
	});
});

describe('Assign to new variable names', () => {
	describe('Rename "nickname" to "nick" and "avatar" to "img"', () => {
		it('should match "Speedy John" and "me-at-work.jpg"', () => {
			assert.equal(nick, 'Speedy John');
			assert.equal(img, 'me-at-work.jpg');
		});
	});
});

describe('More advanced and tricks', () => {
	const fibonacci = () => [1, 2, 3, 5, 8, 13, 21];

	describe('Skip array values', () => {
		it('should match [1, 2, 5]', () => {
			assert.equal(a, 1);
			assert.equal(b, 2);
			assert.equal(d, 5);
		});
	});

	describe('Use the rest syntax', () => {
		it('should match [3, 5, 8, 13, 21]', () => {
			assert.deepEqual(c, [3, 5, 8, 13, 21]);
		});
	});

	describe('Swapping variables', () => {
		it('should match "a = 2" and "b = 1"', () => {
			assert.equal(a, 2);
			assert.equal(b, 1);
		});
	});

	describe('Object parameter with default values', () => {
		class Person {
			constructor(id, name, nick) {
				this.id = id;
				this.name = name;
				this.nick = nick;
			}

			say() {
				return `Hi, my name is ${this.name}`;
			}
		}

		const john = new Person({ name: 'John Doe' });

		it('should have filled "id" and "nick" properties with default values', () => {
			assert.ok(john.id);
			assert.equal(john.nick, 'unknown');
		});

		it('should have used the "name" config property', () => {
			assert.equal(john.name, 'John Doe');
		});
	});
});
