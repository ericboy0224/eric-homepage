import type { Metadata } from "next";
import './globals.css';

import { ThemeProvider } from '@/components/theme-provider';
import { merriweather } from '@/components/ui/fonts';
import { cn } from '@/lib/utils';

import { Header } from './header';

export const metadata: Metadata = {
  title: "Eric Lin's Homepage",
  description: "A full-stack developer based in Taipei.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased flex justify-center",
        merriweather.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className={cn('w-full max-w-screen-lg mx-auto')}>
            <Header />
            <main className="h-full">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html >
  );
}
