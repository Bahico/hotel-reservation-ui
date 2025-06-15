import { Route } from '@angular/router';
import dashboardRoutes from './dashboard/dashboard.routes';

export const appRoutes: Route[] = [
  {
    path: 'hotel',
    loadChildren: () => import('hotel/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  dashboardRoutes,
];
