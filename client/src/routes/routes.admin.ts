import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import LoginAdmin from '../pages/admin/LoginAdmin';

const routesAdmin: any[] = [
  {
    path: '/admin',
    layout: AdminLayout,
    component: LoginAdmin,
    exact: true,
  },
];

export default routesAdmin;
