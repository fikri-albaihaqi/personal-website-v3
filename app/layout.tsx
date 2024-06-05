import type { Metadata } from "next";
import "./globals.css";
import { kumbhSans } from "./assets/fonts";

export const metadata: Metadata = {
  title: "Fikri Albaihaqi",
  description: "Front-end Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kumbhSans.className}`}>
        <div className="w-screen h-screen bg-[url('/bg-noise.gif')] opacity-15 fixed">
        </div>
        {children}
      </body>
    </html>
  );
}
