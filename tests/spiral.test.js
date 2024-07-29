const spiral = require('../src/spiral')

describe('spiral of less than 3', () => {
    it('should throw an error for 0', () => {
        expect(() => spiral(0)).toThrowError('Size must be odd number >= 3')
    })

    it('should throw an error for 1', () => {
        expect(() => spiral(1)).toThrowError('Size must be odd number >= 3')
    })

    it('should throw an error for 2', () => {
        expect(() => spiral(2)).toThrowError('Size must be odd number >= 3')
    })
})
