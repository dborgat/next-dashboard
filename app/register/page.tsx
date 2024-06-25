import RegisterForm from '../ui/register/registerForm';
import { getZones, getFamilyType, getHouseType, getRoles } from '@/lib/data';

const RegisterPage: React.FC = async () => {
  const zones = await getZones();
  const familiaType = await getFamilyType();
  const hogarType = await getHouseType();
  const roles = await getRoles();

  return (
    <div className='flex flex-col gap-4 p-5 justify-center md:items-center'>
      <RegisterForm
        familyType={familiaType}
        zones={zones}
        roles={roles}
        houseType={hogarType}
      />
    </div>
  );
};

export default RegisterPage;
