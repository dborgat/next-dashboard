'use client';
import React from 'react';
import { menuItems } from '@/app/helpers/menuItems';
import { useUser } from '../../context/UserContext';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SingleUserDashboard = () => {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove('token');
    router.push('/login');
  };

  return (
    <div className='flex flex-col gap-5 px-5 my-5'>
      <button className='border border-slate-950  p-4 text-center md:w-1/6 hover:bg-slate-950 hover:text-white'>
        <h1 className='capitalize'>Mi perfil</h1>
      </button>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
        {menuItems.map((item, idx) => (
          <Link
            href={`${item.path}`}
            key={idx}
            className='border border-slate-950 py-4 text-center hover:bg-slate-950 hover:text-white'
          >
            <h1 className='capitalize'>{item.title}</h1>
          </Link>
        ))}
      </div>
      <button
        className='border border-slate-950 mt-4 py-4 text-center w-1/6 hover:bg-slate-950 hover:text-white'
        onClick={handleLogout}
      >
        <h1 className='capitalize'>Salir</h1>
      </button>
    </div>
  );
};

export default SingleUserDashboard;
