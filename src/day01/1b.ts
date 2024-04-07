const isNumeric = (str: string): boolean => {
	return /^\d+$/.test(str)
}

const findFirstNumber = (input: string) => {
	const totalLetters = input.length

	for (let i = 0; i < totalLetters; i++) {
		const char = input.charAt(i)
		if (isNumeric(char)) {
			return char.toString()
		}
	}

	return '0'
}

const findLastNumber = (input: string) => {
	const totalLetters = input.length

	for (let i = totalLetters - 1; i >= 0; i--) {
		const char = input.charAt(i)
		if (isNumeric(char)) {
			return char.toString()
		}
	}

	return '0'
}

export const solve = (inputStrings: string[]) => {
	let total: number = 0

	// We're going to replace string numbers with digit numbers, but this fixes string numbers that butt up against one another
	const cleanedInputStrings: string[] = inputStrings
		.map((e: string) => e.replaceAll('oneight', 'oneeight'))
		.map((e: string) => e.replaceAll('threeight', 'threeeight'))
		.map((e: string) => e.replaceAll('fiveight', 'fiveeight'))
		.map((e: string) => e.replaceAll('nineight', 'nineeight'))
		.map((e: string) => e.replaceAll('twone', 'twoone'))
		.map((e: string) => e.replaceAll('sevenine', 'sevennine'))
		.map((e: string) => e.replaceAll('eightwo', 'eighttwo'))

		// Then we replace string numbers with numerical numbers
		.map((e: string) => e.replaceAll('one', '1'))
		.map((e: string) => e.replaceAll('two', '2'))
		.map((e: string) => e.replaceAll('three', '3'))
		.map((e: string) => e.replaceAll('four', '4'))
		.map((e: string) => e.replaceAll('five', '5'))
		.map((e: string) => e.replaceAll('six', '6'))
		.map((e: string) => e.replaceAll('seven', '7'))
		.map((e: string) => e.replaceAll('eight', '8'))
		.map((e: string) => e.replaceAll('nine', '9'))


	cleanedInputStrings.forEach((inputString: string) => {
		const firstNum = findFirstNumber(inputString)
		const lastNum = findLastNumber(inputString)
		const numberAppended = firstNum.toString() + lastNum.toString()
		total += parseInt(numberAppended, 10)
	})

	return total
}
