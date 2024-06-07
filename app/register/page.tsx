import { MdPets } from 'react-icons/md';
import RegisterForm from '../ui/register/form';
import { getZones, getFamilyType, getHouseType } from '@/lib/data';

const RegisterPage: React.FC = async () => {
  const zones = await getZones();
  const familiaType = await getFamilyType();
  const hogarType = await getHouseType();

  return (
    <div className='h-screen flex flex-col gap-4 p-5 justify-center md:items-center'>
      <div className='flex gap-3 items-center'>
        <h1 className='text-2xl'>Rescataditos</h1>
        <MdPets size={20} color='#ef4444' />
      </div>
      <RegisterForm
        familyType={familiaType}
        zones={zones}
        houseType={hogarType}
      />
    </div>
  );
};

export default RegisterPage;
