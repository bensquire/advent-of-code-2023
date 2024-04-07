import {solve} from "./1a";

describe('Advent of code day 1a', () => {
	test('can calculate a code with a single number', () => {
		const output = solve(['sixsrvldfour4seven'])
		expect(output).toEqual(44)
	})

	test('can calculate a code with no numbers', () => {
		const output = solve(['sixsrvldfourseven'])
		expect(output).toEqual(0)
	})

	test('can calculate a code with 2 numbers', () => {
		const output = solve(['aa2aa1aa'])
		expect(output).toEqual(21)
	})

	test('can calculate a code with 3 numbers', () => {
		const output = solve(['aa2a5a1aa'])
		expect(output).toEqual(21)
	})

	test('can calculate multiple codes', () => {
		const output = solve(['aa2a5a1aa', 'aa2a5a1aa'])
		expect(output).toEqual(42)
	})
})
