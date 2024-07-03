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
  const [error, setError] = useState({
    email: {
      message: '',
      state: false,
    },
    password: {
      message: '',
      state: false,
    },
  });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password: string): boolean => {
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{5,}$/;
    return passwordRegex.test(password);
  };

  const handleEmailValidation = (email: string) => {
    if (email === '')
      return setError({ ...error, email: { state: false, message: '' } });
    if (!isValidEmail(email)) {
      setError({
        ...error,
        email: {
          message: 'Por favor ingrese un email invalido',
          state: true,
        },
      });
    } else {
      setError({ ...error, email: { message: '', state: false } });
    }
  };

  const handlePasswordValidation = (password: string) => {
    if (password === '')
      return setError({ ...error, password: { state: false, message: '' } });
    if (!isPasswordValid(password)) {
      setError({
        ...error,
        password: {
          message:
            'La contraseña debe tener al menos 5 caracteres, una letra mayuscula y un numero',
          state: true,
        },
      });
    } else {
      setError({ ...error, password: { message: '', state: false } });
    }
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
              placeholder='Email'
              name='email'
              onChange={handleChange}
              required
              value={userLogin.email}
              onFocus={() =>
                setError({ ...error, email: { message: '', state: false } })
              }
              onBlur={() => handleEmailValidation(userLogin.email)}
            />
            <label className='text-red-500 text-sm'>
              {error.email.message}
            </label>
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
                onFocus={() =>
                  setError({
                    ...error,
                    password: { message: '', state: false },
                  })
                }
                onBlur={() => handlePasswordValidation(userLogin.password)}
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
            <label className='text-red-500 text-sm'>
              {error.password.message}
            </label>
          </div>
          <button
            className={`p-2 ${
              loading || error.password.state || error.email.state
                ? 'bg-slate-600'
                : 'bg-red-300'
            } bg-red-300 mt-5 flex gap-5 justify-center items-center`}
            type='submit'
            disabled={loading || error.password.state || error.email.state}
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
