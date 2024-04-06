import {solveDayOneB} from "./1b";

describe('Advent of code day 1', () => {
	test('can calculate a code with no numbers', () => {
		const output = solveDayOneB(['tensrvldten'])
		expect(output).toEqual(0)
	})

	test('can calculate a code 2 string numbers', () => {
		const output = solveDayOneB(['two1nine'])
		expect(output).toEqual(29)
	})

	test('can calculate a code with 3 string numbers', () => {
		const output = solveDayOneB(['eightwothree'])
		expect(output).toEqual(83)
	})

	test('can calculate a code which leads and ends with a string representation of a number', () => {
		const output = solveDayOneB(['abcone2threexyz'])
		expect(output).toEqual(13)
	})

	test('can calculate a code which leads and ends with a numeric representation of a number', () => {
		const output = solveDayOneB(['4nineeightseven2'])
		expect(output).toEqual(42)
	})

	test('can calculate a code which leads with a string number and ends with a numeric representation of a number', () => {
		const output = solveDayOneB(['zoneight234'])
		expect(output).toEqual(14)
	})

	test('can calculate a code which leads with a numeric representation of a number and ends with a string representation of a number', () => {
		const output = solveDayOneB(['7pqrstsixteen'])
		expect(output).toEqual(76)
	})

	test('can calculate a code ignoring the string representation of 10', () => {
		const output = solveDayOneB(['ten1aaa2'])
		expect(output).toEqual(12)
	})

	test('can calculate a code correctly correcting for string representation of numbers pushed together', () => {
		const output = solveDayOneB(['oneight'])
		expect(output).toEqual(18)
	})
})
