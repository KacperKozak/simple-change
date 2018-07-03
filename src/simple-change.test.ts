import { change, changeObject, changeArray } from './simple-change';

describe('simple-change', () => {
    it('change should be defined', () => {
        expect(change).toBeDefined();
    });
    it('changeObject should be defined', () => {
        expect(changeObject).toBeDefined();
    });
    it('changeArray should be defined', () => {
        expect(changeArray).toBeDefined();
    });
});
