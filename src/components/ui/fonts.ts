import { Inter as FontSans, Oswald } from 'next/font/google';

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '700']
});
