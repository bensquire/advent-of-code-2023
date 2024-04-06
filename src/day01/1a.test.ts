import {solveDayOneA} from "./1a";

describe('Advent of code day 1', () => {
	test('can calculate a code with a single number', () => {
		const output = solveDayOneA(['sixsrvldfour4seven'])
		expect(output).toEqual(44)
	})

	test('can calculate a code with no numbers', () => {
		const output = solveDayOneA(['sixsrvldfourseven'])
		expect(output).toEqual(0)
	})

	test('can calculate a code with 2 numbers', () => {
		const output = solveDayOneA(['aa2aa1aa'])
		expect(output).toEqual(21)
	})

	test('can calculate a code with 3 numbers', () => {
		const output = solveDayOneA(['aa2a5a1aa'])
		expect(output).toEqual(21)
	})

	test('can calculate multiple codes', () => {
		const output = solveDayOneA(['aa2a5a1aa', 'aa2a5a1aa'])
		expect(output).toEqual(42)
	})
})
