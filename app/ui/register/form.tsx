'use client';
import React, { useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

interface RegisterFormProps {
  familyType: [{ id: number; type: string }];
  zones: [{ id: number; name: string }];
  houseType: [{ id: number; type: string }];
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  familyType,
  zones,
  houseType,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  console.log(houseType, 'zones');

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
          <label className='text-sm text-gray-200'>Ingresa tu contraseña</label>
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
          <label className='text-sm text-gray-200'>Repeti tu contraseña</label>
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
        <div className='grid gap-1'>
          <label className='text-sm text-gray-200'>
            Selecciona tu zona de residencia
          </label>
          <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'>
            {zones.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className='grid gap-1'>
          <label className='text-sm text-gray-200'>
            Selecciona tu tipo de hogar
          </label>
          <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'>
            {houseType.map(({ id, type }) => (
              <option key={id} value={id}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className='grid gap-1'>
          <label className='text-sm text-gray-200'>
            Selecciona el tipo de familia
          </label>
          <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'>
            {familyType.map(({ id, type }) => (
              <option key={id} value={id}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <button className='p-2 rounded-lg bg-slate-500'>Registrarse</button>
        <span className='text-sm text-gray-200 text-center'>
          ¿Ya tienes cuenta? Inicia sesion
        </span>
        <button className='p-2 rounded-lg bg-slate-500'>Ingresar</button>
      </form>
    </div>
  );
};

export default RegisterForm;
