import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import DeferredPomodoro from "@/components/DeferredPomodoro";
import "./globals.css";

const lowResourceBootstrap = `(function(){try{var ua=navigator.userAgent||'';if(/(?:ArchLowRam\\/1|ArchLite)/i.test(ua)){document.documentElement.classList.add('arch-lite');}}catch(e){}})();`;

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
      <head>
        <script dangerouslySetInnerHTML={{ __html: lowResourceBootstrap }} />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300 relative overflow-x-hidden">
        <a href="#main-content" className="fixed left-3 top-3 z-[100] -translate-y-20 rounded-lg bg-blue-700 px-4 py-2 text-sm font-bold text-white shadow-lg transition-transform focus:translate-y-0">跳到主要內容</a>
        {/* Global Ambient Glows */}
        <div className="arch-ambient absolute top-0 left-0 h-[500px] w-[min(500px,100vw)] bg-blue-500/10 rounded-full blur-3xl mix-blend-multiply pointer-events-none opacity-50 dark:opacity-20 animate-blob"></div>
        <div className="arch-ambient absolute top-0 right-0 h-[500px] w-[min(500px,100vw)] bg-emerald-500/10 rounded-full blur-3xl mix-blend-multiply pointer-events-none opacity-50 dark:opacity-20 animate-blob animation-delay-2000"></div>
        
        <ThemeProvider>
          <Navbar />
          <main id="main-content" className="flex-1 relative z-10" tabIndex={-1}>{children}</main>
          <DeferredPomodoro />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
