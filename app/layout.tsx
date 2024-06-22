import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Route Planner - Calculate Distance with Google Maps",
  description: "Easily calculate distances between locations using Google Maps. Plan your routes with multiple stops and get accurate travel distances.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href={"https://img.icons8.com/arcade/64/address.png"} /> */}
        <link rel="icon" href="/address.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
