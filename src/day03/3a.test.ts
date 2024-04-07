import {solve} from "./3a";

describe('Advent of code day 3a', () => {
	test('The sample exercise passes', () => {
		const output = solve(`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`)
		expect(output).toEqual(4361)
	})

	test('That 0 is the output when there are no special symbols', () => {
		const output = solve(`.....
.123.
.....`)
		expect(output).toEqual(0)
	})

	test('That with a single number and 1 special number, the total equals the number', () => {
		const output = solve(`.....
.123.
....*`)
		expect(output).toEqual(123)
	})

	test('That with a 2 numbers and 2 special numbers, the total equals the combined values', () => {
		const output = solve(`.*...
.123.
.123.
....*`)
		expect(output).toEqual(246)
	})
})
