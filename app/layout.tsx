import { Footer } from '@/components/footer';
import { NoisyEffect } from '@/components/noise';
import { Stars } from '@/components/stars';
import '@/styles/globals.css';
import { fonts } from '@/styles/typography';
import { cn } from '@/utils/styling';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Bryan Pothon',
    template: '%s | Bryan Pothon',
  },
  metadataBase: new URL('https://bryanpth.dev'),
  description: 'Frontend developer, and design enthusiast.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={cn(...fonts, 'antialiased')} lang="en">
      <body>
        <NoisyEffect />
        <Stars />

        <div className="relative flex min-h-dvh flex-col justify-between p-8">
          <main className="mx-auto w-full max-w-prose text-neutral-50">
            {children}
          </main>
          <Footer />
        </div>

        <Analytics />
      </body>
    </html>
  );
}
