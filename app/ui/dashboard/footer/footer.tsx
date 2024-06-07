import React from 'react';
import { MdPets } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='flex justify-between items-center p-5 bg-slate-950'>
      <div className='flex gap-3 items-center'>
        <h1 className='text-2xl text-white'>Rescataditos</h1>
        <MdPets size={20} color='#ef4444' />
      </div>
    </div>
  );
};

export default Footer;
