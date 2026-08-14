import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import DeferredPomodoro from "@/components/DeferredPomodoro";
import "./globals.css";

const displayBootstrap = `(function(){try{var r=document.documentElement;var ua=navigator.userAgent||'';if(/(?:ArchLowRam\\/1|ArchLite)/i.test(ua)){r.classList.add('arch-lite');}var saved=localStorage.getItem('arch-theme');var dark=saved==='dark'||(saved!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches);r.classList.toggle('dark',dark);r.style.colorScheme=dark?'dark':'light';}catch(e){}})();`;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF8F5" },
    { media: "(prefers-color-scheme: dark)", color: "#081622" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Arch · 台灣高工建築科學習基地 · 信達雅建築素養與統測備考",
    template: "%s · Arch 台灣高工建築科",
  },
  description: "面向全台高工建築科學生與教師的開放共學基地。收錄 86+ 章節教學、動態圖解實驗室、營造現場手冊、考點速查卡、925 題統測詳解與建築師/技師證照地圖。",
  keywords: ["台灣高工建築科", "統測建築類", "工程力學", "建築材料", "測量實習", "建築製圖", "建築師考試", "結構技師", "土木技師", "SFD BMD", "莫爾圓", "CNS 建築製圖"],
  authors: [{ name: "Arch 開放教育社群" }],
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Arch · 台灣高工建築科學習基地",
    description: "把建築學懂，也把分數蓋起來。86 章完整課程、五大動態圖解實驗室、營造現場手冊與 925 道統測五科全詳解。",
    type: "website",
    locale: "zh_TW",
    siteName: "Arch",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: displayBootstrap }} />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300 relative overflow-x-hidden selection:bg-blue-600/20 selection:text-slate-950 dark:selection:bg-teal-400/20 dark:selection:text-white">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-xl bg-blue-700 dark:bg-blue-600 px-5 py-2.5 text-xs font-mono font-bold text-white shadow-xl ring-2 ring-white/50 transition-transform focus:translate-y-0"
        >
          跳至主要內容 (Skip to Main Content)
        </a>
        
        {/* Global Architectural Ambient Glows */}
        <div className="arch-ambient absolute top-0 left-0 h-[480px] w-[min(520px,100vw)] bg-blue-600/8 dark:bg-teal-400/5 rounded-full blur-3xl mix-blend-multiply pointer-events-none opacity-60 dark:opacity-30"></div>
        <div className="arch-ambient absolute top-12 right-0 h-[440px] w-[min(480px,100vw)] bg-teal-600/8 dark:bg-blue-400/5 rounded-full blur-3xl mix-blend-multiply pointer-events-none opacity-60 dark:opacity-30"></div>
        
        <ThemeProvider>
          <Navbar />
          <main id="main-content" className="flex-1 relative z-10" tabIndex={-1}>
            {children}
          </main>
          <DeferredPomodoro />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
