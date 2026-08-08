import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

import { PomodoroTimer } from "@/components/quiz/PomodoroTimer";

export const metadata: Metadata = {
  title: "Arch - 台灣高工建築科學習、建築素養與志工培養平台",
  description: "全台高工建築科學生與教師的共學、資源庫、台灣建築探索館、個人學習訓練，包含統測考題、製圖實習、測量實習與建築素養案例。",
  manifest: "/manifest.json"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300 relative overflow-x-hidden">
        {/* Global Ambient Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl mix-blend-multiply pointer-events-none opacity-50 dark:opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl mix-blend-multiply pointer-events-none opacity-50 dark:opacity-20 animate-blob animation-delay-2000"></div>
        
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <PomodoroTimer />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
