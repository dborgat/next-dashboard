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
  console.log(pathname);

  return (
    <Link
      href={item.path}
      className={`p-3 flex items-center gap-2 hover:bg-red-600 ${pathname === item.path ? 'bg-red-600' : ''} rounded-md`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
