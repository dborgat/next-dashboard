'use client';
import React, { useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { BiLoaderAlt } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface RegisterFormProps {
  familyType: [{ id: number; type: string }];
  zones: [{ id: number; name: string }];
  houseType: [{ id: number; type: string }];
  roles: [{ id: number; type: string }];
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  familyType,
  zones,
  houseType,
  roles,
}) => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    zone: '',
    familyType: '',
    rol: '',
    houseType: '',
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setLoading(false);
        router.push('/login');
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  return (
    <div className='bg-slate-950 flex flex-col gap-5 p-5 shadow-xl w-full'>
      <span className='text-lg text-center text-white'>Registrate</span>
      <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-5'>
        <div className='grid gap-1'>
          <label className='text-sm text-gray-200'>
            Ingresa tu nombre de usuario
          </label>
          <input
            className='p-2 text-black border-none focus:outline-none'
            type='text'
            name='name'
            placeholder='Nombre de usuario'
            onChange={handleChange}
            value={form.name}
            required
          />
        </div>
        <div className='grid gap-1'>
          <label className='text-sm text-gray-200'>
            Ingresa tu correo electronico
          </label>
          <input
            className='p-2 text-black border-none focus:outline-none'
            type='email'
            name='email'
            placeholder='Email'
            onChange={handleChange}
            value={form.email}
            required
          />
        </div>
        <div className='grid gap-1'>
          <label className='text-sm text-gray-200'>Ingresa tu contraseña</label>
          <div className='flex bg-white justify-between items-center'>
            <input
              className='p-2 text-black bg-transparent w-3/4 border-none focus:outline-none'
              type={showPassword ? 'text' : 'password'}
              placeholder='Contraseña'
              name='password'
              onChange={handleChange}
              value={form.password}
              required
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

          <div className='flex bg-white justify-between items-center'>
            <input
              className='p-2 text-black bg-transparent focus:outline-none'
              type={'password'}
              placeholder='Repite tu contraseña'
              name='confirmPassword'
              onChange={handleChange}
              value={form.confirmPassword}
              required
            />
            {form.password !== form.confirmPassword ? (
              <span className='text-red-500 text-sm pr-2'>
                Las contraseñas no coinciden
              </span>
            ) : null}
          </div>
        </div>
        <div className='grid gap-1'>
          <label className='text-sm text-gray-200'>
            Selecciona tu zona de residencia
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
            Selecciona tu tipo de hogar
          </label>
          <select
            className='bg-gray-50 border border-r-8 border-transparent text-gray-900 text-sm block w-full p-2.5'
            name='houseType'
            onChange={handleChange}
            value={form.houseType}
            required
          >
            <option value='' disabled hidden>
              Selecciona una opción
            </option>
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
          <select
            className='bg-gray-50 border border-r-8 border-transparent text-gray-900 text-sm  block w-full p-2.5'
            name='familyType'
            onChange={handleChange}
            defaultValue={form.familyType}
            required
          >
            <option value='' disabled hidden>
              Selecciona una opción
            </option>
            {familyType.map(({ id, type }) => (
              <option key={id} value={id}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className='grid gap-1'>
          <label className='text-sm text-gray-200'>
            Selecciona tu tipo de usuario
          </label>
          <select
            className='bg-gray-50 border border-r-8 border-transparent text-gray-900 text-sm  block w-full p-2.5'
            name='rol'
            onChange={handleChange}
            defaultValue={form.rol}
            required
          >
            <option value='' disabled hidden>
              Selecciona una opción
            </option>
            {roles.map(
              ({ id, type }) =>
                type !== 'admin' && (
                  <option key={id} value={id}>
                    {type.toLocaleUpperCase()}
                  </option>
                )
            )}
          </select>
        </div>
        <button
          className={`p-2 ${
            loading ? 'bg-slate-600' : 'bg-red-300'
          } mt-5 col-span-2 flex gap-5 justify-center items-center`}
          type='submit'
          disabled={loading}
        >
          {loading && <BiLoaderAlt className='animate-spin' />}
          Registrarse
        </button>
      </form>
      <h3 className='text-sm text-gray-200 text-center'>
        ¿Ya tienes cuenta?{' '}
        <Link href={'/login'}>
          <span className='underline text-orange-300'>Inicia sesion</span>
        </Link>
      </h3>
      <button
        className={`p-2 ${loading ? 'bg-slate-600' : 'bg-red-500'}`}
        onClick={() => router.push('/login')}
      >
        Ir al login
      </button>
    </div>
  );
};

export default RegisterForm;
