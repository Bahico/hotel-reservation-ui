import {Route} from '@angular/router';

export default {
  path: 'dashboard',
  loadComponent: () => import('./dashboard.component').then(m => m.DashboardComponent),
  children: [
    {
      path: 'staff',
      loadChildren: () => import('staff/routes'),
    },
    {
      path: 'organization',
      loadChildren: () => import('organization/routes'),
    }
  ]
} satisfies Route;
