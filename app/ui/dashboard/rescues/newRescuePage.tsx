'use client';
import React from 'react';

interface NewRescuesPageProps {
  zones: [{ id: number; name: string }];
  animalType: [{ id: number; type: string }];
}

const NewRescuesPage: React.FC<NewRescuesPageProps> = ({
  zones,
  animalType,
}) => {
  return (
    <div className='p-5'>
      <div className='flex justify-between mb-5'>
        <h1 className='text-3xl mb-5'>Agregar un nuevo Rescate</h1>
      </div>
      <div className='bg-slate-950 flex flex-col gap-5 p-5 shadow-xl w-full'>
        <form className='grid grid-cols-2 gap-5'>
          <div className='grid gap-1'>
            <label className='text-sm text-gray-200'>
              Selecciona la zona de rescate
            </label>
            <select
              className='bg-gray-50 border-r-8 border-transparent text-gray-900 text-sm block w-full p-2.5'
              name='zone'
              //   onChange={handleChange}
              //   value={form.zone}
              required
            >
              <option value='' disabled hidden>
                Selecciona una opción
              </option>
              {zones.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className='grid gap-1'>
            <label className='text-sm text-gray-200'>
              Monto total del rescate
            </label>
            <input
              type='text'
              className='bg-gray-50 border-r-8 border-transparent text-gray-900 text-sm block w-full p-2.5'
              placeholder='Monto total del rescate $'
            />
          </div>
          <div className='grid gap-1'>
            <label className='text-sm text-gray-200'>
              Cantidad de rescataditos
            </label>
            <select
              className='bg-gray-50 border-r-8 border-transparent text-gray-900 text-sm block w-full p-2.5'
              name='quantity'
              //   onChange={handleChange}
              //   value={form.zone}
              required
            >
              <option value='' disabled hidden>
                Cantidad de rescataditos
              </option>
              {Array(6)
                .fill('')
                .map((_, index) => (
                  <option key={index} value={index}>
                    {index}
                  </option>
                ))}
            </select>
          </div>
          <div className='grid gap-1'>
            <label className='text-sm text-gray-200'>
              Selecciona un tipo de animal
            </label>
            <select
              className='bg-gray-50 border-r-8 border-transparent text-gray-900 text-sm block w-full p-2.5'
              name='animalType'
              //   onChange={handleChange}
              //   value={form.zone}
              required
            >
              <option value='' disabled hidden>
                Selecciona un tipo de animal
              </option>
              {animalType.map(({ id, type }) => (
                <option key={id} value={id}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <button
            className={`p-2 bg-red-300 mt-5 col-span-2 flex gap-5 justify-center items-center`}
            type='submit'
          >
            Crear rescate
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewRescuesPage;
