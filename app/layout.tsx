import type { Metadata } from "next";
import "./globals.css";
import { kumbhSans } from "./assets/fonts";
import Menu from "./components/menu";

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
      <body className={`${kumbhSans.className} text-ivory`}>
        <div className="w-screen h-screen bg-[url('/bg-noise.gif')] opacity-10 fixed -z-50">
        </div>
        <Menu />
        {children}
      </body>
    </html>
  );
}
