'use client';
import React, { useState } from 'react';
import { MdPets } from 'react-icons/md';

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your registration logic here
  };

  return (
    <div className='md:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-screen flex flex-col gap-4 p-5 justify-center bg-cyan-600 md:items-center'>
      <div className='flex gap-3 items-center'>
        <h1 className='text-2xl'>Rescataditos</h1>
        <MdPets size={20} />
      </div>
      <div className='bg-zinc-700 flex flex-col gap-5 rounded-lg p-5 shadow-xl md:w-2/5'>
        <span className='text-lg text-center'>Registrate</span>
        <form onSubmit={handleSubmit} className='grid gap-5'>
          <div className='grid gap-1'>
            <label className='text-sm text-gray-200'>
              Ingresa tu correo electronico
            </label>
            <input
              className='p-2 rounded-lg text-black border-none focus:outline-none'
              type='email'
              placeholder='Email'
            />
          </div>
          <div className='grid gap-1'>
            <label className='text-sm text-gray-200'>
              Ingresa tu contraseña
            </label>
            <input
              className='p-2 rounded-lg text-black border-none focus:outline-none'
              type='password'
              placeholder='Contraseña'
            />
          </div>
          <div className='grid gap-1'>
            <label className='text-sm text-gray-200'>
              Confirma tu contraseña
            </label>
            <input
              className='p-2 rounded-lg text-black border-none focus:outline-none'
              type='password'
              placeholder='Confirmar contraseña'
            />
          </div>
          <button className='p-2 rounded-lg bg-slate-500'>Registrarse</button>
          <span className='text-sm text-gray-200 text-center'>
            ¿Ya tienes cuenta? Inicia sesion
          </span>
          <button className='p-2 rounded-lg bg-slate-500'>Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
