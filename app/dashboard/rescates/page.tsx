import React from 'react';
import { getRescues } from '@/lib/data';
import RescuesPage from '../../ui/dashboard/rescues/rescuesPage';

const Page: React.FC = async () => {
  const rescues = await getRescues();

  return <RescuesPage rescues={rescues} />;
};

export default Page;
