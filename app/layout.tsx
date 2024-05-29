import type { Metadata } from 'next';
import { Inter, Comfortaa } from 'next/font/google';
import './ui/globals.css';

const inter = Inter({ subsets: ['latin'] });
const conforta = Comfortaa({ subsets: ['latin'], weight: ['300', '400','500','600','700'] });

export const metadata: Metadata = {
  title: 'Rescataditos App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={conforta.className}>{children}</body>
    </html>
  );
}
