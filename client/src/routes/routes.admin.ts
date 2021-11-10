import {
  CATEGORIES_ADMIN_PAGE_ROUTE,
  HOME_ADMIN_PAGE_ROUTE,
  LOGIN_ADMIN_PAGE_ROUTE,
  USERS_ADMIN_PAGE_ROUTE,
} from '../constants/routes';
import { RouteType } from '../interfaces/routes';
import { AdminLayout } from '../layouts';
import {
  LoginAdmin,
  HomeAdmin,
  UsersAdmin,
  CategoriesAdmin,
} from '../pages/admin';

const routesAdmin: RouteType[] = [
  {
    path: LOGIN_ADMIN_PAGE_ROUTE,
    layout: AdminLayout,
    component: LoginAdmin,
    exact: true,
  },
  {
    path: HOME_ADMIN_PAGE_ROUTE,
    layout: AdminLayout,
    component: HomeAdmin,
    exact: true,
  },
  {
    path: USERS_ADMIN_PAGE_ROUTE,
    layout: AdminLayout,
    component: UsersAdmin,
    exact: true,
  },
  {
    path: CATEGORIES_ADMIN_PAGE_ROUTE,
    layout: AdminLayout,
    component: CategoriesAdmin,
    exact: true,
  },
];

export default routesAdmin;
