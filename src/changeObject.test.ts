import { changeObject } from './simple-change';

type Settings = {
    darkTheme: boolean;
    fontSize?: number;
};

const getSettings = (): Settings => ({
    darkTheme: false,
    fontSize: 14
});

describe('changeObject', () => {
    it('should be defined', () => {
        expect(changeObject).toBeDefined();
    });

    it('setTo', () => {
        const settings = getSettings();
        const newSettings = changeObject(settings).setTo({
            darkTheme: true
        });

        expect(newSettings).toEqual({
            darkTheme: true,
            fontSize: undefined
        });
        expect(settings).toEqual(getSettings());
    });

    it('set', () => {
        const settings = getSettings();
        const newSettings = changeObject(settings).set(old => ({
            darkTheme: !old.darkTheme,
            fontSize: 13
        }));

        expect(newSettings).toEqual({
            darkTheme: true,
            fontSize: 13
        });
        expect(settings).toEqual(getSettings());
    });

    it('update', () => {
        const settings = getSettings();
        const newSettings = changeObject(settings).update(settings => ({
            darkTheme: !settings.darkTheme
        }));

        expect(newSettings).toEqual({
            darkTheme: true,
            fontSize: 14
        });
        expect(settings).toEqual(getSettings());
    });
});
