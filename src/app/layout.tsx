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
          <div className="bg-pink p-4">
            <div className="mx-4 p-2">
              <Navbar />
              <div className="mt-28">{children}</div>
            </div>
          </div>
        </body>
      </AuthProvider>
    </html>
  );
}
