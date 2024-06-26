import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/index';
import AuthProvider from '@/contexts/AuthenticationContext';
import Footer from '@/components/Footer/index';

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
          <div className="bg-pink relative h-full w-full">
            <div className=" h-full">
              <Navbar />
              <div className="mt-28">{children}</div>
              <div className="z-10">
                <Footer />
              </div>
            </div>
          </div>
        </body>
      </AuthProvider>
    </html>
  );
}
