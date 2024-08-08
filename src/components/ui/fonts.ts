import { Foldit, Merriweather, Poppins } from 'next/font/google';

export const merriweather = Merriweather({
    subsets: ['latin'],
    weight: ['300', '700']
});

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700']
});

export const foldit= Foldit({
    subsets: ['latin'],
    weight: ['700']
});
