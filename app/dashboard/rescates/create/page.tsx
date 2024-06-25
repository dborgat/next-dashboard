import NewRescuesPage from '@/app/ui/dashboard/rescues/newRescuePage';
import React from 'react';
import { getZones, getAnimalTypes } from '@/lib/data';

const CreateRescueForm: React.FC = async () => {
  const zones = await getZones();
  const animalType = await getAnimalTypes();

  return <NewRescuesPage zones={zones} animalType={animalType} />;
};

export default CreateRescueForm;
