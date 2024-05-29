import React from 'react';
import { MdLogout } from 'react-icons/md';
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';
import { menuItems } from '../../../helpers/menuItems';

const Sidebar = () => {
  return (
    <div className='h-full grid content-between'>
      <div className='flex items-center gap-5 mb-5'>
        <Image
          src='/noavatar.png'
          width={50}
          height={50}
          alt='logo'
          className='rounded-full'
        />
        <div className='grid'>
          <span className='font-semibold'>Davor Dev</span>
          <span className='text-red-950'>Admin</span>
        </div>
      </div>
      <ul className='bg-vanilla'>
        {menuItems?.map((item) => (
          <li key={item.title} className=''>
            <h2 className='text-prusian font-bold text-sm mt-2 mb-0'>
              {item.title}
            </h2>
            <ul>
              {item.list.map((listItem) => (
                <MenuLink key={listItem.title} item={listItem} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div>
        <button className='p-3 mt-1 mb-0 flex items-center gap-2 cursor-pointer rounded-lg bg-none border-none w-full hover:bg-orange'>
          <MdLogout />
          <span>Salir</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
