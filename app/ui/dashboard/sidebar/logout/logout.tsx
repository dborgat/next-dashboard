'use client';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { MdLogout } from 'react-icons/md';

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove('token');
    router.push('/login');
  };

  return (
    <div className='grid'>
      <button
        onClick={handleLogout}
        className='p-3 mt-1 mb-0 flex items-center gap-2 cursor-pointer rounded-lg bg-none border-none w-full hover:bg-blue place-self-end'
      >
        <MdLogout />
        <span>Salir</span>
      </button>
    </div>
  );
};

export default LogoutButton;
