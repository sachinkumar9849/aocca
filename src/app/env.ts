export type EnvType = {
    readonly NEXT_PUBLIC_APP_NAME: string;
    readonly NEXT_PUBLIC_BASE_URL: string;
    readonly NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
    readonly NEXT_PUBLIC_GRAPH_ENDPOINT: string;
};

export const env: EnvType = {
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || "",
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "",
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "",
    NEXT_PUBLIC_GRAPH_ENDPOINT: process.env.NEXT_PUBLIC_GRAPH_ENDPOINT || "",
};
