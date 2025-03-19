export interface Specification {
    id: number;
    title: string;
    subtitle: string;
    value: string;
}

export interface SpecificationsData {
    specifications: {
        data: Specification[];
    };
}

export interface Brand {
    id: number;
    name: string;
    key: string;
    image: string;
    display_size: string | number;
    display_resolution: string | number;
    video: string | number;
    battery_type: string | number;
    release_date: string | number;
    camera: string | number;
    ram: string | number;
    chipset: string | number;
    battery: string | number;
    os_type: string | number;
    specifications: {
        data: Specification[];
    };
}

export interface BrandResponse {
    status: number;
    message: string;
    data: Brand;
}

export interface BlogItemsProps {
    id: string | number;
    title: string;
    content: string;
    excerpt: string;
    image: string;
    created_at: string | number;
}
export interface ApiResponseProps {
    status: number;
    message: string;
    data: BlogItemsProps[];
}
