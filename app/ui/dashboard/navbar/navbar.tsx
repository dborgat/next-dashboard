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
    <div className='flex justify-between items-center p-5 rounded-lg bg-red-300'>
      <div className='text-red-950 font-bold capitalize'>
        {pathname.split('/').pop()}
      </div>
      <div className='flex items-center gap-2'>
        <div className='flex items-center gap-2 bg-red-200 p-2 rounded-lg'>
          <MdSearch />
          <input type='text' placeholder='Search' className='bg-transparent border-none text-red-950'/>
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
