'use client';
import { useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='md:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-screen flex flex-col gap-4 p-5 justify-center bg-cyan-600 md:items-center'>
      <div className='flex gap-3 items-center'>
        <h1 className='text-2xl'>Rescataditos</h1>
        <MdPets size={20} />
      </div>
      <div className='bg-zinc-700 flex flex-col gap-5 rounded-lg p-5 shadow-xl md:w-2/5'>
        <form className='grid gap-5'>
          <span className='text-lg text-center'>Inicia sesion</span>
          <div className='grid gap-1'>
            <label className='text-sm text-gray-200'>
              Ingresa tu correo electronico
            </label>
            <input
              className='p-2 rounded-lg text-black border-none focus:outline-none'
              type='email'
              placeholder='Username'
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
                placeholder='Password'
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
          <button className='p-2 rounded-lg bg-slate-500 mt-5'>Ingresar</button>
          <span className='text-sm text-gray-200 text-center'>
            ¿No tienes cuenta? Registrate
          </span>
          <button className='p-2 rounded-lg bg-slate-500'>Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
