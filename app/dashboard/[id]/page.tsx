import React from 'react';
import { getUser } from '@/lib/data';
import { menuItems } from '@/app/helpers/menuItems';

const SingleUserDashboard = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const user = await getUser(+id);

  return (
    <div className='flex flex-col justify-between gap-5 px-5'>
      <div className='flex justify-between content-center'>
        <div className='border border-slate-950 p-4 text-center md:w-1/3 content-center'>
          <h1 className='capitalize'>Bienvenido {user.name}!</h1>
        </div>
        <button className='border border-slate-950  p-4 text-center md:w-1/6 hover:bg-slate-950 hover:text-white'>
          <h1 className='capitalize'>Mi perfil</h1>
        </button>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            className='border border-slate-950 py-4 text-center hover:bg-slate-950 hover:text-white'
          >
            <h1 className='capitalize'>{item.title}</h1>
          </button>
        ))}
      </div>
      <button className='border border-slate-950 mt-4 py-4 text-center w-1/6 hover:bg-slate-950 hover:text-white'>
        <h1 className='capitalize'>Salir</h1>
      </button>
    </div>
  );
};

export default SingleUserDashboard;
