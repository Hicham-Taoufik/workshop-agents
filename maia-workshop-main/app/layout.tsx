import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import AppChrome from "@/components/AppChrome";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AiA26 - International Conference on Artificial Intelligence Applications",
  description: "The 7th International Conference on Artificial Intelligence Applications (AiA26), June 12-13, 2026 in Martil - Tetouan, Morocco.",
  keywords: "AiA26, Artificial Intelligence Applications, Conference, Tetouan, Morocco, IEEE Morocco Section",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} font-sans antialiased bg-neutral-50 text-neutral-900`}
      >
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}

