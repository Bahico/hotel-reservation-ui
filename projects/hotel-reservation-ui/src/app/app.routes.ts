import { Route } from '@angular/router';
import dashboardRoutes from './dashboard/dashboard.routes';

export const appRoutes: Route[] = [
  {
    path: 'authorization',
    loadChildren: () =>
      import('authorization/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'login',
    loadChildren: () => import('login/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  dashboardRoutes,
];
