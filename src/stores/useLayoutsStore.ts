import { atom } from 'nanostores';

export const isCartOpen = atom(false);

export const setIsCartOpen = (value: boolean) => isCartOpen.set(value);

export const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen.get());
