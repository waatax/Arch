import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arch — 台灣高工建築科學習、建築素養與志向養成平台",
  description: "全台高工建築科學生的公共學習資料庫、台灣建築探索館與個人學習教練。包含統測考科、製圖實習、測量實習與建築素養案例。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-(--color-paper-50) text-(--color-ink-900) transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
