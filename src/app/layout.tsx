import Footer from "./components/comman/Footer";
import Header from "./components/comman/Header";

import "./globals.css";

export const metadata = {
    title: "Academy Of Commerce Chartered Accountant",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />

                {children}
                <Footer />
            </body>
        </html>
    );
}
