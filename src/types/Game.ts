export interface Game {
    Games: {
        id: number;
        name: string;
        img: string;
        price: number;
        url: string;
    };
    GamesTags: {
        id: number;
        game: number;
        tag: number;
    };
    Tags: {
        id: number;
        name: string;
    };
}
