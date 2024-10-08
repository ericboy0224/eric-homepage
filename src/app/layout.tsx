import type { Metadata } from "next";
import './globals.css';

import { ThemeProvider } from '@/components/ui/theme-provider';

import { cn } from '@/lib/utils';

import { Header } from './header';
import { poppins } from "@/components/ui/fonts";

export const metadata: Metadata = {
  title: "Eric Lin - Full-stack Developer | Software Engineer",
  description: "Eric Lin is a full-stack developer and software engineer based in Taipei, specializing in React, Next.js, and Go.",
  keywords: ["Eric Lin", "full-stack developer", "software engineer", "React", "Next.js", "Go", "Taipei"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased flex justify-center overflow-y-scroll",
        poppins.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full h-screen max-w-screen-lg mx-auto">
            <Header />
            <main className="h-full mt-20">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html >
  );
}