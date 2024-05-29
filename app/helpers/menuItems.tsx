import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdAttachMoney,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdPets,
  MdCelebration,
  MdCompareArrows,
} from 'react-icons/md';

export const menuItems = [
  {
    title: 'Paginas',
    list: [
      { title: 'Dashboard', path: '/dashboard', icon: <MdDashboard /> },
      {
        title: 'Usuarios',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: 'Rescataditos',
        path: '/dashboard/rescataditos',
        icon: <MdCelebration />,
      },
      {
        title: 'Por adoptar',
        path: '/dashboard/por-adoptar',
        icon: <MdPets />,
      },
      {
        title: 'En Transito',
        path: '/dashboard/transito',
        icon: <MdCompareArrows />,
      },
      {
        title: 'Donaciones',
        path: '/dashboard/donaciones',
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: 'Usuario',
    list: [
      {
        title: 'Configuracion',
        path: '/dashboard/configuracion',
        icon: <MdOutlineSettings />,
      },
      {
        title: 'Ayuda',
        path: '/dashboard/ayuda',
        icon: <MdHelpCenter />,
      },
    ],
  },
];
