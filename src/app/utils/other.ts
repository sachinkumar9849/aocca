export interface MetalPriceProps {
    id: number;
    metal: {
        id: number;
        name: string;
    };
    price_per_tola: string;
    price_per_ten_gram: string;
    date: string;
}
