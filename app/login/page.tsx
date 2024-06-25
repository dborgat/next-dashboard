'use client';
import { useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { BiLoaderAlt } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useUser } from '../context/UserContext';

const Login = () => {
  const router = useRouter();
  const { setUser } = useUser();
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userLogin),
      });

      const { token, user } = await response.json();

      if (response.ok) {
        setLoading(false);
        setUser(user);
        Cookies.set('token', token, { expires: 1 });
        router.push(`/dashboard/${user.id}`);
      }
    } catch (error) {
      setLoading(false);
      console.error('Error iniciando sesión', error);
      alert('Email o contraseña incorrectos');
    }
  };

  return (
    <div className='h-screen flex flex-col gap-4 p-5 justify-center md:items-center'>
      <div className='bg-slate-950 flex flex-col gap-5 p-5 shadow-xl md:w-2/5'>
        <form className='grid gap-5' onSubmit={handleSubmit}>
          <span className='text-lg text-center text-white'>Inicia sesion</span>
          <div className='grid gap-1'>
            <label className='text-sm text-gray-200'>
              Ingresa tu correo electronico
            </label>
            <input
              className='p-2 text-black border-none focus:outline-none'
              type='email'
              placeholder='Username'
              name='email'
              onChange={handleChange}
              required
              value={userLogin.email}
            />
          </div>
          <div className='grid gap-1'>
            <label className='text-sm text-gray-200'>
              Ingresa tu contraseña
            </label>
            <div className='flex bg-white justify-between items-center'>
              <input
                className='p-2 text-black bg-transparent w-3/4 border-none focus:outline-none'
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                name='password'
                onChange={handleChange}
                value={userLogin.password}
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
          <button
            className={`p-2 ${
              loading ? 'bg-slate-600' : 'bg-red-300'
            } bg-red-300 mt-5 flex gap-5 justify-center items-center`}
            type='submit'
            disabled={loading}
          >
            {loading && <BiLoaderAlt className='animate-spin' />}
            Ingresar
          </button>
        </form>
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
};

export default Login;
