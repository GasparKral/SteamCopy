export type Game = {
    id: number;
    name: string;
    img: string;
    price: number;
    url: string;
    tags: string;
    offert: boolean;
    offertedPrice: number | null;
    totalReviews: number;
    badReviews: number;
};
