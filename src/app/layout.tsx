import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
    title: "Sohel Rana — Headless WordPress Developer",
    description:
        "Headless WordPress development and Lovable-to-WordPress migrations for UK and European businesses.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
            </head>
            <body className={geist.className} suppressHydrationWarning>
                <header className="border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 bg-white z-50">
                    <Link href="/" className="font-bold text-xl text-slate-900">
                        Sohel<span className="text-blue-500">.</span>dev
                    </Link>
                    <nav className="flex gap-6 text-sm font-medium text-slate-600">
                        <Link
                            href="/blog"
                            className="hover:text-blue-500 transition"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            className="hover:text-blue-500 transition"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                            Hire Me
                        </Link>
                    </nav>
                </header>

                {children}

                <footer className="bg-slate-900 text-slate-400 text-sm py-10 px-8 text-center">
                    <p className="mb-1 text-white font-semibold">
                        Sohel Rana — Full-Stack & Headless WordPress Developer
                    </p>
                    <p>
                        Serving clients across the UK and Europe · Based in
                        Bangladesh
                    </p>
                    <p className="mt-4">
                        © {new Date().getFullYear()} · Built with Next.js +
                        Headless WordPress
                    </p>
                </footer>
            </body>
        </html>
    );
}
