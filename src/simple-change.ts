import { isPlainObject } from './helpers';

export const change = (any: any) => {
    if (isPlainObject(any)) {
        const data: Object = any;
        return {
            get: () => data,
            setTo: (newData: Object) => newData,
            updateTo: (newData: Object) => ({ ...data, ...newData })
        };
    }

    throw new Error(`[simple-change] Unsupported type (${typeof any})`);
};
