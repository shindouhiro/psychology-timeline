import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "学习心理学 - 时间线图谱",
  description: "探索心理学的发展历程和核心知识点",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="dark h-full antialiased">
      <body className={`${inter.className} min-h-full flex flex-col bg-background text-foreground relative overflow-x-hidden`}>
        {/* 背景光晕装饰 */}
        <div className="fixed top-0 -left-1/4 w-1/2 h-1/2 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="fixed bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        {/* 主要内容区域 */}
        <div className="relative z-10 flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
