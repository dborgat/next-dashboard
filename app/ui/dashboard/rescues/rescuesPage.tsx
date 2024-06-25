'use client';
import Link from 'next/link';
import React from 'react';

const RescuesPage = ({ rescues }: { rescues: any }) => {
  console.log(rescues, '11111');

  const countOwnerIds = (rescues: any[]) => {
    let count = 0;
    for (const rescue of rescues) {
      if (rescue.ownerId) {
        count++;
      }
    }
    return count;
  };

  return (
    <div className='p-5'>
      <div className='flex justify-between mb-5'>
        <h1 className='text-3xl mb-5'>Rescates</h1>
        <Link
          href='/dashboard/rescates/create'
          className='border border-slate-950 p-4 text-center hover:bg-slate-950 hover:text-white'
        >
          <h1>Agregar Rescate</h1>
        </Link>
      </div>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        {rescues.map((rescue: any) => {
          let rescueCount = countOwnerIds(rescues);
          return (
            <div
              key={rescue.id}
              className='border border-slate-950 py-4 text-center hover:bg-slate-950 hover:text-white'
            >
              <h1 className='text-2xl'>Rescate Numero: {rescue.id}</h1>
              <p>{rescue.zone.name}</p>
              <p>
                Tiene {rescue.rescataditos.length}{' '}
                {rescue.rescataditos.length > 1
                  ? 'rescataditos'
                  : 'rescatadito'}
              </p>
              <p>
                {rescueCount < 1
                  ? 'Ninguno esta adoptado'
                  : `Ya adoptaron a ${rescueCount}`}
              </p>
              <p>Tiene un saldo de ${rescue.totalAmount}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RescuesPage;
