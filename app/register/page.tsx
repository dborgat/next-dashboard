import { MdPets } from 'react-icons/md';
import RegisterForm from '../ui/register/form';
import { getZones, getFamilyType, getHouseType } from '@/lib/data';

const RegisterPage: React.FC = async () => {
  const zones = await getZones();
  const familiaType = await getFamilyType();
  const hogarType = await getHouseType();

  return (
    <div className='md:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-screen flex flex-col gap-4 p-5 justify-center bg-cyan-600 md:items-center'>
      <div className='flex gap-3 items-center'>
        <h1 className='text-2xl'>Rescataditos</h1>
        <MdPets size={20} />
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
