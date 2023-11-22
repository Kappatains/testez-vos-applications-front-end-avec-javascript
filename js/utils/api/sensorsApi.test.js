import {retrieveSensorsData} from './sensorsApi'
import { data } from '../../../data/mock-homepage-data'

describe('retrieveSensorsData test', () => {
    it('should return mocked data', () => (
        expect(retrieveSensorsData()).toBe(data.facades)
    ))

}
)
