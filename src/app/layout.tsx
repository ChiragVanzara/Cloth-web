import type { Metadata, Viewport } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import { ToastProvider } from '@/context/ToastContext';
import { SmoothScrollProvider } from '@/components/ui/SmoothScrollProvider';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'VOSTRA — Contemporary Fashion & High-End Streetwear',
  description:
    'Architectural silhouettes, raw Japanese selvedge denim, and 280-450 GSM organic heavyweight knits. Built for everyday movement.',
  keywords: [
    'VOSTRA',
    'Streetwear',
    'Japanese Selvedge Denim',
    'Oversized T-Shirts',
    'Contemporary Fashion',
    'Gen-Z Fashion',
    'Luxury Streetwear India',
  ],
  authors: [{ name: 'VOSTRA STUDIO' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#F7F7F5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F7F7F5] text-[#111315] min-h-screen flex flex-col antialiased font-secondary">
        <SmoothScrollProvider>
          <ToastProvider>
            <CartProvider>
              <WishlistProvider>
                <AnnouncementBar />
                <Navbar />
                <main className="flex-1 w-full">{children}</main>
                <Footer />
              </WishlistProvider>
            </CartProvider>
          </ToastProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
