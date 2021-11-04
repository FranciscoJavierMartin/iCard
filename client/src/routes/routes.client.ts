import { HOME_PAGE_ROUTE } from '../constants/routes';
import { RouteType } from '../interfaces/routes';
import { ClientLayout } from '../layouts';
import { Home } from '../pages/client';

const routesClient: RouteType[] = [
  {
    path: HOME_PAGE_ROUTE,
    layout: ClientLayout,
    component: Home,
    exact: true,
  },
];

export default routesClient;
