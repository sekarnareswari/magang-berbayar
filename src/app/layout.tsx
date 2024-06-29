import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Header from "./components/header";

export const metadata: Metadata = {
    title: "Magang Berbayar",
    description: "Indonesian paid internship board",
};

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={pjs.className}>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
