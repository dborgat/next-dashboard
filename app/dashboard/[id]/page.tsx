import React from 'react';
import { getUser } from '@/lib/data';

const SingleUserDashboard = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const user = await getUser(+id);

  //   const handleLogout = () => {
  //     Cookies.remove('token');
  //     router.push('/login');
  //   };

  return (
    <div>
      <h1>Bienvenido, {user.name}</h1>
      <p>Tu correo electrónico: {user.email}</p>
    </div>
  );
};

export default SingleUserDashboard;
