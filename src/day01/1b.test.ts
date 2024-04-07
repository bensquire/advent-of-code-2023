import {solve} from "./1b";

describe('Advent of code day 1b', () => {
	test('can calculate a code with no numbers', () => {
		const output = solve(['tensrvldten'])
		expect(output).toEqual(0)
	})

	test('can calculate a code 2 string numbers', () => {
		const output = solve(['two1nine'])
		expect(output).toEqual(29)
	})

	test('can calculate a code with 3 string numbers', () => {
		const output = solve(['eightwothree'])
		expect(output).toEqual(83)
	})

	test('can calculate a code which leads and ends with a string representation of a number', () => {
		const output = solve(['abcone2threexyz'])
		expect(output).toEqual(13)
	})

	test('can calculate a code which leads and ends with a numeric representation of a number', () => {
		const output = solve(['4nineeightseven2'])
		expect(output).toEqual(42)
	})

	test('can calculate a code which leads with a string number and ends with a numeric representation of a number', () => {
		const output = solve(['zoneight234'])
		expect(output).toEqual(14)
	})

	test('can calculate a code which leads with a numeric representation of a number and ends with a string representation of a number', () => {
		const output = solve(['7pqrstsixteen'])
		expect(output).toEqual(76)
	})

	test('can calculate a code ignoring the string representation of 10', () => {
		const output = solve(['ten1aaa2'])
		expect(output).toEqual(12)
	})

	test('can calculate a code correctly correcting for string representation of numbers pushed together', () => {
		const output = solve(['oneight'])
		expect(output).toEqual(18)
	})
})
