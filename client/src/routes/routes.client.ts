import ClientLayout from '../layouts/ClientLayout/ClientLayout';
import Error404 from '../pages/Error404';
import Home from '../pages/client/Home';

const routesClient: any[] = [
  {
    path: '/',
    layout: ClientLayout,
    component: Home,
    exact: true,
  },
];

export default routesClient;
