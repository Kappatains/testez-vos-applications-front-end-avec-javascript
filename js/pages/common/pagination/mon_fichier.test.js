import Pagination from './index'

describe('Pagination test', () => {
    it('should return something', () => (
        expect(Pagination.getNumberOfPages(12)).toBeDefined()
    ))
    it('should return 0', () => (
        expect(Pagination.getNumberOfPages(0)).toBe(0)
    ))
    it('should return 1', () => (
        expect(Pagination.getNumberOfPages(7)).toBe(1)
    ))
    it('should return 5', () => (
        expect(Pagination.getNumberOfPages(34)).toBe(5)
    ))
})