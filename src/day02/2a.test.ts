import { solveDayTwoA } from "./2a";

describe('Advent of code day 2a', () => {
	test('can calculate a code with only 1 game, where the scores all fall within bounds', () => {
		const output = solveDayTwoA('Game 1: 1 green, 2 blue; 2 red')
		expect(output).toEqual(1)
	})

	test('can calculate a code with only 1 game, where one of the scores falls out of bounds', () => {
		const output = solveDayTwoA('Game 1: 1 green, 2 blue; 20 red')
		expect(output).toEqual(0)
	})

	test('can calculate a code with 2 games, where all scores are within bounds', () => {
		const output = solveDayTwoA("Game 1: 1 green, 2 blue; 2 red\nGame 2: 1 green, 2 blue; 2 red")
		expect(output).toEqual(3)
	})

	test('can calculate a code with 2 games, where in one game the scores are out of bounds', () => {
		const output = solveDayTwoA("Game 1: 1 green, 20 blue; 2 red\nGame 2: 1 green, 2 blue; 2 red")
		expect(output).toEqual(2)
	})

	test('can successfully process advent of code example', () => {
		const output = solveDayTwoA('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\n' +
			'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\n' +
			'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\n' +
			'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\n' +
			'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green')
		expect(output).toEqual(8)
	})
})
