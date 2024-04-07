import {solve} from "./2b";

describe('Advent of code day 2b', () => {
	test('can successfully solve single game', () => {
		const output = solve('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')
		expect(output).toEqual(6 * 4 * 2) // 6 blue, 4 red, 2 green
	})

	test('can successfully solve two game', () => {
		const output = solve('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\n' +
			'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue')
		expect(output).toEqual((6 * 4 * 2) + (4 * 1 * 3)) // 6 blue, 4 red, 2 green & 4 blue, 1 red, 3 green
	})

	test('can successfully solve the advent of code example', () => {
		const output = solve('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\n' +
			'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\n' +
			'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\n' +
			'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\n' +
			'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green')
		expect(output).toEqual(2286)
	})
})
