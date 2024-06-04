'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

interface MenuLinkProps {
  item: {
    title: string;
    path: string;
    icon: React.ReactNode;
  };
}

const MenuLink = ({ item }: MenuLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`mt-3 p-3 flex items-center text-slate-100 gap-2 hover:bg-slate-400 ${
        pathname === item.path ? 'bg-slate-400' : ''
      } rounded-md`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
