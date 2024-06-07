import React, { ReactNode } from 'react';
import Sidebar from '../ui/dashboard/sidebar/sidebar';
import Navbar from '../ui/dashboard/navbar/navbar';
import Footer from '../ui/dashboard/footer/footer';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className='p-5 bg-slate-200 h-screen'>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default DashboardLayout;
