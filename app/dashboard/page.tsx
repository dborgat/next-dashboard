import React from 'react';
import Card from '../ui/dashboard/card/card';
import RightBar from '../ui/dashboard/rightBar/rightBar';
import Transactions from '../ui/dashboard/transactions/transactions';
import Chart from '../ui/dashboard/chart/chart';

const Dashboard = () => {
  return (
    <div className='flex gap-5 py-2'>
      <div className='flex-[3_3_0%] flex flex-col gap-2'>
        <div className='flex gap-5 justify-between'>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className='flex-1'>
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
