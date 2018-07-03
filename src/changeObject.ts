export const changeObject = <T>(data: T) => ({
    setTo: (newData: T) => newData,
    set: (cb: (data: T) => T) => cb(data),
    // Object.assign instead of spread… https://github.com/Microsoft/TypeScript/issues/10727
    updateTo: (newData: Partial<T>): T => Object.assign({}, data, newData),
    update: (cb: (data: T) => Partial<T>): T => Object.assign({}, data, cb(data))
});
