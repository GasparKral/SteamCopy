export type SpecificationsTable = {
    id: number;
    specifications: unknown;
};

export type Specifications = {
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
    recommended: boolean;
};
