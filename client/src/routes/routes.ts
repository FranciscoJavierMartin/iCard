import BasicLayout from '../layouts/BasicLayout/BasicLayout';
import Error404 from '../pages/Error404';
import routesAdmin from './routes.admin';
import routesClient from './routes.client';

const routes = [
  ...routesAdmin,
  ...routesClient,
  {
    layout: BasicLayout,
    component: Error404,
  },
];

export default routes;
