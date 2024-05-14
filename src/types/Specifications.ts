export type SpecificationsTable = {
    id: number;
    specifications: Specifications;
};

export type Specifications = {
    processor: string;
    ram: string;
    graphics: string;
    storage: string;
    recommended: boolean;
};
