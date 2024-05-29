import React from 'react';
import { MdSupervisedUserCircle } from 'react-icons/md';

const Card = () => {
  return (
    <div className='bg-red-500 px-2 py-5 flex rounded-lg gap-5 cursor-pointer w-full hover:bg-red-700'>
      <MdSupervisedUserCircle size={24} />
      <div className='flex flex-col gap-5'>
        <span>Total Users</span>
        <span className='font-bold text-xl'>10.273 </span>
        <span className='font-light text-sm bg-red-200 p-3 rounded-lg'>
          <span className='text-lime-600'>10%</span> more than last month
        </span>
      </div>
    </div>
  );
};

export default Card;
