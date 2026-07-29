import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Space_Grotesk, DM_Sans } from 'next/font/google';
import { Toaster } from 'sonner';
import { CustomCursor } from '@/components/portfolio/CustomCursor';
import './globals.css';

const TITLE = 'Cristian Mocanu - Senior Software Engineer';
const DESCRIPTION =
  'Senior Software Engineer in Romania building full-stack products: .NET APIs, React front-ends, React Native apps and Azure cloud infrastructure.';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: 'Cristian Mocanu' }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <CustomCursor />
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
