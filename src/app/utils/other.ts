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

export const normalizeImageUrl = (url?: string | null): string => {
    if (!url) return "";

    const trimmed = url.trim();
    if (!trimmed) return "";

    return trimmed.startsWith("http://") ? `https://${trimmed.slice("http://".length)}` : trimmed;
};
