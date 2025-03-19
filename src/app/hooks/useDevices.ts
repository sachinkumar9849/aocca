import API_BASE_URL from "@/lib/apiConfig";

import { useQuery } from "@tanstack/react-query";

interface Devices {
    id: number;
    name: string;
    key: string;
    image?: string;
}

interface DeviceResponse {
    status: number;
    message: string;
    data: Devices[];
}

const fetchDevices = async (): Promise<Devices[]> => {
    const response = await fetch(`${API_BASE_URL}/devices?page=1&size=6&popular=1`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch devices: ${response.status}`);
    }
    const result: DeviceResponse = await response.json();
    return result.data;
};

export const useDevices = () => {
    return useQuery({
        queryKey: ["popular-devices"],
        queryFn: fetchDevices,
        retry: 2,
    });
};
