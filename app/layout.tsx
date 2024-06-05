import type { Metadata } from "next";
import "./globals.css";

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
      <body className="">{children}</body>
    </html>
  );
}
