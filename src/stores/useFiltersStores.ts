import { atom } from 'nanostores';

export type Order =
    | 'First Cheap'
    | 'First Expensive'
    | 'Alphabetically'
    | 'Alphabetically inverted'
    | 'Most Popular';
interface Filter {
    categories: string[];
    range: number[];
    isOfferted: boolean;
    maxPrice: number;
    minPrice: number;
    orderBy: Order;
}

export const filter = atom<Filter>({
    categories: [],
    range: [0, 250],
    isOfferted: false,
    maxPrice: 250,
    minPrice: 0,
    orderBy: 'First Cheap',
});

export const updateRange = (value: number[]) => {
    filter.set({ ...filter.get(), range: value });
};

export const updateCategories = (value: string) => {
    filter.set({
        ...filter.get(),
        categories: [...filter.get().categories, value],
    });
};

export const elimiateCategories = (value: string) => {
    filter.set({
        ...filter.get(),
        categories: filter
            .get()
            .categories.filter((category) => category !== value),
    });
};

export const updateIsOfferted = (value: boolean) => {
    filter.set({ ...filter.get(), isOfferted: value });
};

export const updateOrderBy = (value: Order) => {
    filter.set({ ...filter.get(), orderBy: value });
};
