import { change } from './simple-change';

const getSettings = () => ({
    darkTheme: false,
    fontSize: 14
});

describe('simple-change', () => {
    it('should be defined', () => {
        expect(change).toBeDefined();
    });

    it('should get current value', () => {
        const settings = getSettings();
        const newSettings = change(settings).get();
        expect(newSettings).toEqual({ other: true });
        expect(settings).toEqual(getSettings());
    });

    it('should update object', () => {
        const settings = getSettings();
        const newSettings = change(settings).update(settings => ({
            darkTheme: !settings.darkTheme
        }));
        expect(newSettings).toEqual({ darkTheme: true, fontSize: 14 });
        expect(settings).toEqual(getSettings());
    });

    // change(state.users)
    //     .find(user => user.id === id)
    //     .set(user => ({
    //         ...user,
    //         name: newName
    //     }));

    // change(state.users)
    //     .find(user => user.id === id)
    //     .update(user => ({
    //         name: newName
    //     }));

    // change(state.users).add({
    //     id: uuid(),
    //     name: newName
    // });

    // change(state.users)
    //     .find(user => user.id === id)
    //     .remove();

    // change(state.users)
    //     .where(user => !user.active)
    //     .update(user => ({
    //         active: true
    //     }));

    // change(state.chats)
    //     .where(chat => chat.isPublic)
    //     .update(chat => ({
    //         users: change(chat.users)
    //             .find(user => user.id === id)
    //             .remove()
    //     }));
});
