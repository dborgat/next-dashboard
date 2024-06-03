import React from 'react';
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';
import { menuItems } from '../../../helpers/menuItems';
import Cookies from 'js-cookie';
import LogoutButton from './logout/logout';

const Sidebar = () => {
  return (
    <div className='h-full grid'>
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
          <span className='text-slate-400'>Administrador</span>
        </div>
      </div>
      <ul>
        {menuItems?.map((item) => (
          <li key={item.title} className=''>
            <h2 className='font-bold text-sm mt-2 mb-0 underline'>
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
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
