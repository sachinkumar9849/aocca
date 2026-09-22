import Footer from "./components/comman/Footer";
import Header from "./components/comman/Header";
import Script from "next/script";
import { SchemaMarkup, getDefaultSiteSchema } from "./utils/seo";

import "./globals.css";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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
        <html lang="en">
            <body suppressHydrationWarning>
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

                {children}
                <Footer />
            </body>
        </html>
    );
}
