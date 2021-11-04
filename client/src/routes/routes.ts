import { RouteType } from 'src/interfaces/routes';
import { BasicLayout } from '../layouts';
import Error404 from '../pages/Error404';
import routesAdmin from './routes.admin';
import routesClient from './routes.client';

const routes = [
  ...routesAdmin,
  ...routesClient,
  {
    layout: BasicLayout,
    component: Error404,
  } as RouteType,
];

export default routes;
