import type { Metadata } from "next";
import './globals.css';

import { ThemeProvider } from '@/components/ui/theme-provider';

import { cn } from '@/lib/utils';

import { Header } from './header';
import { poppins } from "@/components/ui/fonts";

export const metadata: Metadata = {
  title: "Eric Lin | Full-stack Developer & Software Engineer",
  description: "Eric Lin is a passionate full-stack developer and software engineer based in Taipei. Specializing in React, Next.js, and Go, creating innovative web solutions and scalable applications.",
  keywords: ["Eric Lin", "Full-stack Developer", "Software Engineer", "React", "Next.js", "Go", "TypeScript", "Web Development", "Taipei", "Frontend Developer", "Backend Developer"],
  robots: "index, follow",
  openGraph: {
    title: "Eric Lin | Full-stack Developer & Software Engineer",
    description: "Full-stack developer and software engineer specializing in React, Next.js, and Go",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Lin | Full-stack Developer & Software Engineer",
    description: "Full-stack developer and software engineer specializing in React, Next.js, and Go",
  },
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