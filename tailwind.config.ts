import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        extend: {
            colors: {
                theme1: {
                    DEFAULT: "#10529D",
                },
                blackDark:{
                    DEFAULT:"#111928",
                },
                theme3:{ 
                    DEFAULT:"#13529d",
                },
                grayLight: {
                    DEFAULT: "#F7F7F7",
                },
                theme2: {
                    DEFAULT: "#34C759",
                },

                grayDark: {
                    DEFAULT: "#726C6C",
                },
                primary1: {
                    DEFAULT: "#1D4F95",
                },
                secondary2: {
                    DEFAULT: "#76182A",
                },
                lightBlue: {
                    DEFAULT: "#2F75D6",
                },
                tertiary: {
                    DEFAULT: "rgba(137,207,240,1)",
                },
                base: {
                    white: "rgba(250, 250, 250, 1)",
                    black: "rgba(10, 10, 11, 1)",
                    primary: "rgba(58, 72, 167, 1)",
                    secondary: "rgba(220, 167, 90, 1)",
                    success: "rgba(164, 244, 231, 1)",
                    warning: "rgba(244, 199, 144, 1)",
                },
                primary: {
                    "100": "rgba(225, 227, 245, 1)",
                    "200": "rgba(195, 200, 234, 1)",
                    "300": "rgba(164, 172, 224, 1)",
                    "400": "rgba(134, 144, 213, 1)",
                    "500": "rgba(104, 117, 203, 1)",
                    "600": "rgba(74, 89, 192, 1)",
                    "700": "rgba(49, 61, 142, 1)",
                    "800": "rgba(41, 51, 118, 1)",
                    "900": "rgba(32, 40, 93, 1)",
                    "1000": "rgba(24, 29, 68, 1)",
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    "100": "rgba(248, 237, 222, 1)",
                    "200": "rgba(241, 220, 189, 1)",
                    "300": "rgba(234, 202, 156, 1)",
                    "400": "rgba(227, 185, 123, 1)",
                    "500": "rgba(214, 151, 61, 1)",
                    "600": "rgba(197, 134, 42, 1)",
                    "700": "rgba(168, 114, 36, 1)",
                    "800": "rgba(138, 94, 29, 1)",
                    "900": "rgba(109, 74, 23, 1)",
                    "1000": "rgba(80, 54, 17, 1)",
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                neutral: {
                    "100": "rgba(227, 227, 227, 1)",
                    "200": "rgba(204, 203, 203, 1)",
                    "300": "rgba(181, 179, 179, 1)",
                    "400": "rgba(159, 156, 156, 1)",
                    "500": "rgba(137, 131, 132, 1)",
                    "600": "rgba(114, 108, 108, 1)",
                    "700": "rgba(90, 85, 85, 1)",
                    "800": "rgba(67, 62, 63, 1)",
                    "900": "rgba(43, 40, 41, 1)",
                    "1000": "rgba(21, 19, 20, 1)",
                },
                success: {
                    "100": "rgba(164, 244, 231, 1)",
                    "200": "rgba(21, 176, 151, 1)",
                    "300": "rgba(11, 123, 105, 1)",
                },
                warning: {
                    "100": "rgba(244, 199, 144, 1)",
                    "200": "rgba(237, 161, 69, 1)",
                    "300": "rgba(204, 121, 20, 1)",
                },
                error: {
                    "100": "rgba(228, 98, 111, 1)",
                    "200": "rgba(192, 55, 68, 1)",
                    "300": "rgba(140, 24, 35, 1)",
                },
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
            },
            fontSize: {
                "heading-1": [
                    "56px",
                    {
                        fontWeight: 700,
                        letterSpacing: "auto",
                        lineHeight: "67px",
                    },
                ],
                "heading-2": [
                    "48px",
                    {
                        fontWeight: 700,
                        letterSpacing: "auto",
                        lineHeight: "57px",
                    },
                ],
                "heading-3": [
                    "40px",
                    {
                        fontWeight: 700,
                        letterSpacing: "auto",
                        lineHeight: "48px",
                    },
                ],
                "heading-4": [
                    "32px",
                    {
                        fontWeight: 700,
                        letterSpacing: "auto",
                        lineHeight: "38px",
                    },
                ],
                "hero-bold": [
                    "28px",
                    {
                        fontWeight: 700,
                        lineHeight: "33px",
                        letterSpacing: "auto",
                    },
                ],
                "hero-accent": [
                    "28px",
                    {
                        fontWeight: 600,
                        lineHeight: "33px",
                        letterSpacing: "auto",
                    },
                ],
                "hero-standard": [
                    "28px",
                    {
                        fontWeight: 400,
                        lineHeight: "33px",
                        letterSpacing: "auto",
                    },
                ],
                "feature-bold": [
                    "24px",
                    {
                        fontWeight: 700,
                        lineHeight: "28px",
                        letterSpacing: "auto",
                    },
                ],
                "feature-accent": [
                    "24px",
                    {
                        fontWeight: 600,
                        lineHeight: "28px",
                        letterSpacing: "auto",
                    },
                ],
                "feature-standard": [
                    "24px",
                    {
                        fontWeight: 400,
                        lineHeight: "28px",
                        letterSpacing: "auto",
                    },
                ],
                "highlight-bold": [
                    "18px",
                    {
                        fontWeight: 700,
                        lineHeight: "21px",
                        letterSpacing: "auto",
                    },
                ],
                "highlight-accent": [
                    "18px",
                    {
                        lineHeight: "21px",
                        fontWeight: 600,
                        letterSpacing: "auto",
                    },
                ],
                "highlight-standard": [
                    "18px",
                    {
                        lineHeight: "21px",
                        fontWeight: 400,
                        letterSpacing: "auto",
                    },
                ],
                "content-bold": [
                    "16px",
                    {
                        lineHeight: "19px",
                        fontWeight: 700,
                        letterSpacing: "auto",
                    },
                ],
                "content-accent": [
                    "16px",
                    {
                        lineHeight: "19px",
                        letterSpacing: "auto",
                        fontWeight: 600,
                    },
                ],
                "content-standard": [
                    "16px",
                    {
                        lineHeight: "19px",
                        letterSpacing: "auto",
                        fontWeight: 400,
                    },
                ],
                "content-regular": [
                    "16px",
                    {
                        lineHeight: "16px",
                        letterSpacing: "auto",
                        fontWeight: 400,
                    },
                ],
                "caption-bold": [
                    "14px",
                    {
                        lineHeight: "16px",
                        letterSpacing: "auto",
                        fontWeight: 700,
                    },
                ],
                "caption-accent": [
                    "14px",
                    {
                        lineHeight: "16px",
                        letterSpacing: "auto",
                        fontWeight: 600,
                    },
                ],
                "caption-regular": [
                    "14px",
                    {
                        lineHeight: "16px",
                        letterSpacing: "auto",
                        fontWeight: 400,
                    },
                ],
            },
            borderRadius: {
                sharp: "0px",
                xs: "2px",
                s: "4px",
                sm: "calc(var(--radius) - 4px)",
                m: "10px",
                ml: "16px",
                lg: "var(--radius)",
                xl: "36px",
                rounded: "999px",
                md: "calc(var(--radius) - 2px)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
