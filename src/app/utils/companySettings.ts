export interface CompanySetting {
    id?: number;
    company_name: string;
    tagline?: string;
    email: string;
    secondary_email?: string;
    phone: string;
    secondary_phone?: string;
    mobile?: string;
    address: string;
    opening_hours?: string;
    google_map_url?: string;
    facebook_url?: string;
    twitter_url?: string;
    instagram_url?: string;
    linkedin_url?: string;
    youtube_url?: string;
    tiktok_url?: string;
    whatsapp_number?: string;
}

export const DEFAULT_COMPANY_SETTINGS: CompanySetting = {
    company_name: "Academy of Commerce",
    tagline: "Your Companion Towards Success",
    email: "academyofcommercenepal@gmail.com",
    secondary_email: "info@aoc.edu.np",
    phone: "+977-01-4240338",
    secondary_phone: "01-4232067",
    mobile: "+977-9800000000",
    address: "AOC Blue Complex, Ramshah Path, Putalisadak, Kathmandu",
    opening_hours: "Sun - Fri: 6:00 AM - 6:00 PM",
    google_map_url:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5421846170616!2d85.31723307165261!3d27.70054137318389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a8da4510ab%3A0xc86ae3d135068afd!2sAcademy%20Of%20Commerce!5e0!3m2!1sen!2snp!4v1735921866914!5m2!1sen!2snp",
    facebook_url: "https://facebook.com",
    twitter_url: "https://twitter.com",
    instagram_url: "https://instagram.com",
    linkedin_url: "",
    youtube_url: "",
    tiktok_url: "",
    whatsapp_number: "+977014240338",
};

const getApiBase = (): string => {
    const envUrl = (process.env.NEXT_PUBLIC_URL || "").replace(/"/g, "").trim();
    if (typeof window !== "undefined") {
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            if (envUrl.includes("localhost")) {
                return envUrl;
            }
            return "http://localhost:8082/api/v1";
        }
    }
    if (process.env.NODE_ENV !== "production") {
        if (envUrl.includes("localhost")) {
            return envUrl;
        }
        return "http://localhost:8082/api/v1";
    }
    return envUrl || "https://api.aoc.edu.np/api/v1";
};

export async function fetchCompanySettings(): Promise<CompanySetting> {
    const base = getApiBase();
    const candidateUrls = [`${base}/company-settings`];

    if (!base.includes("8082")) {
        if (
            process.env.NODE_ENV !== "production" ||
            (typeof window !== "undefined" &&
                (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"))
        ) {
            candidateUrls.push("http://localhost:8082/api/v1/company-settings");
        }
    }

    for (const url of candidateUrls) {
        try {
            const res = await fetch(url, {
                headers: { Accept: "application/json" },
                ...(process.env.NODE_ENV === "production" ? { next: { revalidate: 60 } } : { cache: "no-store" }),
            });
            if (res.ok) {
                const data = await res.json();
                if (data && typeof data === "object") {
                    return {
                        ...DEFAULT_COMPANY_SETTINGS,
                        ...data,
                    };
                }
            }
        } catch {
            continue;
        }
    }

    return DEFAULT_COMPANY_SETTINGS;
}
