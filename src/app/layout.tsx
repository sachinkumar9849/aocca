import Footer from "./components/comman/Footer";
import Header from "./components/comman/Header";
import Script from "next/script";
import { Inter, Mukta, Poppins } from "next/font/google";
import { SchemaMarkup, getDefaultSiteSchema } from "./utils/seo";

import "./globals.css";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

const mukta = Mukta({
    subsets: ["latin"],
    variable: "--font-mukta",
    display: "swap",
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    display: "swap",
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
    metadataBase: new URL("https://aoc.edu.np"),
    title: "Academy Of Commerce Chartered Accountant",
    description:
        "Academy of Commerce offers CA Foundation, CA Intermediate, and CA Final coaching in Nepal with expert faculty and student support.",
    alternates: {
        canonical: "https://aoc.edu.np",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${mukta.variable} ${poppins.variable}`}>
            <body suppressHydrationWarning className="font-sans">
                <SchemaMarkup schemaJson={getDefaultSiteSchema()} />
                {GA_MEASUREMENT_ID ? (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                            strategy="afterInteractive"
                        />
                        <Script id="ga4-init" strategy="afterInteractive">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA_MEASUREMENT_ID}');
                            `}
                        </Script>
                    </>
                ) : null}
                <Header />

                <main id="main-content">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
