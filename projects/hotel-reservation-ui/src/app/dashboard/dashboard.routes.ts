import {Route} from '@angular/router';
import { authGuard } from '@components/account';

export default {
  path: 'dashboard',
  loadComponent: () => import('./dashboard').then(m => m.Dashboard),
  canActivate: [authGuard],
  children: [
    {
      path: 'staff',
      loadChildren: () => import('staff/routes'),
    },
    {
      path: 'organization',
      loadChildren: () => import('organization/routes'),
    },
    {
      path: 'hotel',
      loadChildren: () => import('hotel/routes'),
    },
    {
      path: 'user',
      loadChildren: () => import('user/routes'),
    },
  ]
} satisfies Route;
