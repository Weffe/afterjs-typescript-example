import { asyncComponent } from '@jaredpalmer/after';
import { RouteProps } from 'react-router';
import Placeholder from './components/Placeholder';

const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./pages/Home/'), // required
      Placeholder
    }),
  },
  {
    path: '/about',
    exact: true,
    component: asyncComponent({
      loader: () => import('./pages/About/'), // required
      Placeholder
    }),
  },
  {
    path: '/user/:id',
    exact: true,
    component: asyncComponent({
      loader: () => import('./pages/User/'), // required
      Placeholder
    }),
  },
];

export default routes;