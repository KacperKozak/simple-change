import { changeObject } from './changeObject';
import { changeArray } from './changeArray';

export const change = (any: any) => {
    if (isPlainObject(any)) {
        return changeObject(any);
    }

    if (Array.isArray(any)) {
        return changeArray(any);
    }

    throw new Error(`[simple-change] Unsupported type (${typeof any})`);
};

const isPlainObject = (o: any) => typeof o == 'object' && o.constructor == Object;
