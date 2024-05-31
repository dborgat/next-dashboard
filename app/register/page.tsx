'use client';
import React, { useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
            <div className='flex bg-white justify-between rounded-lg items-center'>
              <input
                className='p-2 text-black rounded-lg bg-transparent w-3/4 border-none focus:outline-none'
                type={showPassword ? 'text' : 'password'}
                placeholder='Contraseña'
              />
              {showPassword ? (
                <FaEyeSlash
                  onClick={togglePasswordVisibility}
                  color='grey'
                  className='mr-5'
                  size='25'
                />
              ) : (
                <FaEye
                  onClick={togglePasswordVisibility}
                  color='grey'
                  className='mr-5'
                  size='25'
                />
              )}
            </div>
          </div>
          <div className='grid gap-1'>
            <label className='text-sm text-gray-200'>
              Repeti tu contraseña
            </label>
            <div className='flex bg-white justify-between rounded-lg items-center'>
              <input
                className='p-2 text-black rounded-lg bg-transparent w-3/4 border-none focus:outline-none'
                type={showPassword ? 'text' : 'password'}
                placeholder='Repite tu contraseña'
              />
              {showPassword ? (
                <FaEyeSlash
                  onClick={togglePasswordVisibility}
                  color='grey'
                  className='mr-5'
                  size='25'
                />
              ) : (
                <FaEye
                  onClick={togglePasswordVisibility}
                  color='grey'
                  className='mr-5'
                  size='25'
                />
              )}
            </div>
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
