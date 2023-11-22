import {isInTestEnv} from './index'

describe('isInTestEnv test', () => {
    it('should return should be in test env', () => (
        expect(isInTestEnv()).toBe(true)
    ))

    it('should return false', () => {
        process.env.NODE_ENV = 'dev'
        expect(isInTestEnv()).toBe(false)
})
    
})