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

export const dummyImageUrl = "https://icrier.org/wp-content/uploads/2022/09/Event-Image-Not-Found.jpg";

export const normalizeImageUrl = (url?: string | null): string => {
    if (!url) return dummyImageUrl;

    const trimmed = url.trim();
    if (!trimmed) return dummyImageUrl;

    const normalized = trimmed.startsWith("http://") ? `https://${trimmed.slice("http://".length)}` : trimmed;
    return normalized || dummyImageUrl;
};

export const getSafeImageSrc = (url?: string | null): string => normalizeImageUrl(url);
