'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from 'react-icons/md';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className='flex justify-between items-center p-5 rounded-lg bg-slate-600'>
      <div className='font-bold capitalize'>
        {pathname.split('/').pop()}
      </div>
      <div className='flex items-center gap-2'>
        <div className='flex items-center gap-2 bg-prusian p-2 rounded-lg'>
          <MdSearch/>
          <input type='text' placeholder='Search' className='bg-transparent border-none text-vanilla'/>
        </div>
        <div className='flex gap-5'>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
