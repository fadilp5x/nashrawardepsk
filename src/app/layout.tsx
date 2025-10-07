import { Inter, Satoshi } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { CursorTrail } from '@/components/cursor-trail';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

const satoshi = Satoshi({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata = {
  title: 'Fadil Muhammed — AI Pioneer',
  description: 'Tech leader and AI pioneer building intelligent solutions for global enterprises',
  metadataBase: new URL('https://fadilmuhammed.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${satoshi.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CursorTrail />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
