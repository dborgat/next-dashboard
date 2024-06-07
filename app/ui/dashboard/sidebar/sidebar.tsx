import React from 'react';
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';
import { menuItems } from '../../../helpers/menuItems';
import Cookies from 'js-cookie';
import LogoutButton from './logout/logout';

const Sidebar = () => {
  return (
    <div className='h-full grid'>
      <ul>
        {menuItems?.map((item) => (
          <li key={item.title} className=''>
            <h2 className='font-bold text-sm mt-2 mb-0 underline'>
              {item.title}
            </h2>
            <ul></ul>
          </li>
        ))}
      </ul>
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
