import { changeObject } from './changeObject';

export const changeArray = <T>(data: Array<T>) => ({
    where: (cb: (item: T, index?: number, data?: Array<T>) => boolean) => ({
        setTo: (newData: T): Array<T> =>
            data.map(
                (item, i) =>
                    cb(item, i, data) ? changeObject(item).setTo(newData) : item
            ),
        set: (changeCb: (data: T) => T): Array<T> =>
            data.map(
                (item, i) => (cb(item, i, data) ? changeObject(item).set(changeCb) : item)
            ),
        updateTo: (newData: Partial<T>): Array<T> =>
            data.map(
                (item, i) =>
                    cb(item, i, data) ? changeObject(item).updateTo(newData) : item
            ),
        update: (changeCb: (data: T) => Partial<T>): Array<T> =>
            data.map(
                (item, i) =>
                    cb(item, i, data) ? changeObject(item).update(changeCb) : item
            )
    })
});
