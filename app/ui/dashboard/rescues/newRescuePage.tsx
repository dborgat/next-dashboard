'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface NewRescuesPageProps {
  zones: [{ id: number; name: string }];
  animalType: [{ id: number; type: string }];
}

const NewRescuesPage: React.FC<NewRescuesPageProps> = ({
  zones,
  animalType,
}) => {
  const router = useRouter();
  const [form, setForm] = useState({
    zone: '',
    totalAmount: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  console.log('asdasdasdasdasdasd', form);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    // try {
    //   const response = await fetch('/api/addRescue', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(form),
    //   });

    //   if (response.ok) {
    //     setLoading(false);
    //     router.push('/dashboard/addRescataditos');
    //   }
    // } catch (e) {
    //   setLoading(false);
    //   console.log(e);
    // }
  };

  return (
    <div className='p-5'>
      <div className='flex justify-between mb-5'>
        <h1 className='text-3xl mb-5'>Agregar un nuevo Rescate</h1>
      </div>
      <div className='bg-slate-950 flex flex-col gap-5 p-5 shadow-xl w-full'>
        <form className='grid grid-cols-2 gap-5' onSubmit={handleSubmit}>
          <div className='grid gap-1'>
            <label className='text-sm text-gray-200'>
              Selecciona la zona de rescate
            </label>
            <select
              className='bg-gray-50 border-r-8 border-transparent text-gray-900 text-sm block w-full p-2.5'
              name='zone'
              onChange={handleChange}
              value={form.zone}
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
              name='totalAmount'
              onChange={handleChange}
              value={form.totalAmount}
            />
          </div>
          <button
            className={`p-2 bg-red-300 mt-5 col-span-2 flex gap-5 justify-center items-center`}
            type='submit'
          >
            Crear rescate y sumar los rescataditos
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewRescuesPage;
