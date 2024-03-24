import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/index';
import AuthProvider from '@/contexts/AuthenticationContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Accountability Tribe',
  description: 'Create or join an accountability tribe',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <div className="bg-pink">
            <div className="mx-4 pt-2">
              <Navbar />
              {children}
            </div>
          </div>
        </body>
      </AuthProvider>
    </html>
  );
}
