import React, { ReactNode } from 'react';
import Sidebar from '../ui/dashboard/sidebar/sidebar';
import Navbar from '../ui/dashboard/navbar/navbar';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className='grid grid-cols-5 h-screen'>
      <div className='col-span-1 p-5 bg-slate-700'>
        <Sidebar />
      </div>
      <div className='col-span-4 bg-gray p-5 bg-slate-800'>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
