import React from 'react';
import Card from '../ui/dashboard/card/card';
import Transactions from '../ui/dashboard/transactions/transactions';
import Chart from '../ui/dashboard/chart/chart';

const Dashboard = () => {
  return (
    <div className='grid grid-rows-3 gap-5 py-2'>
      <div className='gap-2'>
        <div className='flex gap-5 justify-between'>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
