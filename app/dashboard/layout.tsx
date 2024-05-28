import React, { ReactNode } from 'react';
import Sidebar from '../ui/dashboard/sidebar/sidebar';
import Navbar from '../ui/dashboard/navbar/navbar';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className='flex'>
      <div className='flex-1 bg-red-500 p-5'>
        <Sidebar />
      </div>
      <div className='flex-[4_4_0%] bg-slate-300 p-20'>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
