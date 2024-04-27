import { create } from 'zustand';
import type { User } from '@/types/User';

interface UserState {
    user: User | null;
    setUser: (user: User) => void;
    findUserForEmail: (email: string) => User | undefined;
    findUserForName: (username: string) => User | undefined;
    registNewUser: (user: User) => void;
    authenticate: (email: string, password: string) => User | null;
}

const testUsers: User[] = [
    {
        username: 'test',
        avatar: 'test',
        email: 'test@gmail.com',
        wallet: 0,
        password: 'test',
    },
];

export const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: (user: User) => set({ user }),
    findUserForEmail: (email: string) => {
        return testUsers.find((user) => user.email === email);
    },
    findUserForName: (username: string) => {
        return testUsers.find((user) => user.username === username);
    },

    registNewUser: (user: User) => {
        testUsers.push(user);
    },

    authenticate: (email: string, password: string) => {
        const user = testUsers.find((user) => user.email === email);
        if (user) {
            if (user.password === password) {
                return user;
            } else {
                return null;
            }
        } else {
            return null;
        }
    },
}));
