import type { Metadata } from "next";
import "./globals.css";
import { kumbhSans } from "./assets/fonts";
import Menu from "./components/menu";
import Contact from "./components/contact";

export const metadata: Metadata = {
  title: "Fikri Albaihaqi",
  description: "Front-end Developer",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${kumbhSans.className} text-ivory`}>
        <div className="w-screen h-screen bg-[url('/bg-noise.gif')] opacity-10 fixed -z-50">
        </div>
        <Menu />
        {children}
        <Contact />
      </body>
    </html>
  );
}
