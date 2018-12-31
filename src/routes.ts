import { asyncComponent } from '@jaredpalmer/after';
import { RouteProps } from 'react-router';
import Placeholder from './Placeholder';

const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./Home'), // required
      Placeholder
    }),
  },
  {
    path: '/about',
    exact: true,
    component: asyncComponent({
      loader: () => import('./About'), // required
      Placeholder
    }),
  },
  {
    path: '/user/:id',
    exact: true,
    component: asyncComponent({
      loader: () => import('./User'), // required
      Placeholder
    }),
  },
];

export default routes;