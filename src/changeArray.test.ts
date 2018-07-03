import { changeArray } from './changeArray';

type User = {
    id: number;
    name: string;
    isActive: boolean;
};

const getUsers = (): User[] => [
    {
        id: 1,
        name: 'Stanisława',
        isActive: true
    },
    {
        id: 2,
        name: 'Dobrosława',
        isActive: true
    },
    {
        id: 3,
        name: 'Ciechosława',
        isActive: false
    }
];

describe('changeArray', () => {
    it('find → setTo', () => {
        const users = getUsers();
        const newData = {
            id: 999,
            name: 'Hacker',
            isActive: false
        };
        const newUsers = changeArray(users)
            .where(user => user.id === 1)
            .setTo(newData);

        expect(newUsers[0]).toBe(newData);
    });

    it('find → set', () => {
        const users = getUsers();
        const newUsers = changeArray(users)
            .where(user => user.id === 1)
            .set(user => ({
                id: 999,
                name: 'Hacker',
                isActive: !user.isActive
            }));

        expect(newUsers[0]).toEqual({
            id: 999,
            name: 'Hacker',
            isActive: false
        });
    });

    it('find → updateTo', () => {
        const users = getUsers();
        const newUsers = changeArray(users)
            .where(user => user.id === 1)
            .updateTo({
                name: 'Hacker',
                isActive: false
            });

        expect(newUsers[0]).toEqual({
            id: 1,
            name: 'Hacker',
            isActive: false
        });
    });

    it('find → update', () => {
        const users = getUsers();
        const newUsers = changeArray(users)
            .where(user => user.id === 1)
            .update(user => ({
                name: 'Hacker',
                isActive: !user.isActive
            }));

        expect(newUsers[0]).toEqual({
            id: 1,
            name: 'Hacker',
            isActive: false
        });
    });
});
