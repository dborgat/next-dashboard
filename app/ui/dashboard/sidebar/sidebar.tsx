import React from 'react';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from 'react-icons/md';
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';

const menuItems = [
  {
    title: 'Pages',
    list: [
      { title: 'Dashboard', path: '/dashboard', icon: <MdDashboard /> },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: 'Products',
        path: '/dashboard/product',
        icon: <MdShoppingBag />,
      },
      {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />,
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className='sticky left-0'>
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
      <ul>
        {menuItems.map((item) => (
          <li key={item.title} className=''>
            <h2 className='text-red-900 font-bold text-sm mt-2 mb-0'>
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
      <button className='p-3 mt-1 mb-0 flex items-center gap-2 cursor-pointer rounded-lg bg-none border-none w-full hover:bg-red-600'>
        <MdLogout />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
