import { change } from './change';
import { changeObject } from './changeObject';
import { changeArray } from './changeArray';

describe('change', () => {
    it('should change as object', () => {
        const changeOut = Object.keys(change({ test: 1 }));
        const changeObjectOut = Object.keys(changeObject({ test: 1 }));

        expect(changeOut).toEqual(changeObjectOut);
    });
    it('should change as array', () => {
        const changeOut = Object.keys(change([{ test: 1 }]));
        const changeObjectOut = Object.keys(changeArray([{ test: 1 }]));

        expect(changeOut).toEqual(changeObjectOut);
    });
});
