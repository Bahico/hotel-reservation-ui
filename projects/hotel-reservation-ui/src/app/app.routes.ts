import { Route } from '@angular/router';
import dashboardRoutes from './dashboard/dashboard.routes';

export const appRoutes: Route[] = [
  // {
  //   path: 'user',
  //   loadChildren: () => import('user/Routes').then((m) => m!.remoteRoutes),
  // },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  dashboardRoutes,
  {
    path: 'authorization',
    loadChildren: () => import('authorization/routes'),
  },
];
