'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div className='h-screen flex flex-col gap-4 p-5 justify-center md:items-center'>
      <div className='bg-slate-950 flex flex-col gap-5 p-5 shadow-xl md:w-2/5'>
        <h3 className='text-sm text-gray-200 text-center'>
          ¿No tienes cuenta?{' '}
          <Link href={'/register'}>
            <span className='underline text-orange-300'>Registrate</span>
          </Link>
        </h3>
        <button
          className={`p-2 ${loading ? 'bg-slate-600' : 'bg-red-500'}`}
          onClick={() => router.push('/register')}
          disabled={loading}
        >
          Registrarse
        </button>
      </div>
    </div>
  );
}
