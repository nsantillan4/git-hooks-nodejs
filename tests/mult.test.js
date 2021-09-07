const mult = require('../mult')

it('should return correct mult', () => {
	const result = mult(2, 5)
	expect(result).toBe(10)
})
