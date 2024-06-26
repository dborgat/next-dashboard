import type { Metadata } from 'next';
import { Comfortaa } from 'next/font/google';
import './ui/globals.css';
import Navbar from './ui/dashboard/navbar/navbar';
import { UserProvider } from './context/UserContext';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const conforta = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

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
      <body className={`${conforta.className} font-bold bg-slate-300 h-screen`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <UserProvider>{children}</UserProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
