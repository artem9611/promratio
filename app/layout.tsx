import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ПромРацио",
  description: "Инженерная аналитика и экономика производства",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-white text-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
