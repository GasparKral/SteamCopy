import { create } from 'zustand';
import type { User } from '@/types/User';

interface UserState {
    user: User | null;
    setUser: (user: User) => void;
}

export const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: (user: User) => set({ user }),
}));
