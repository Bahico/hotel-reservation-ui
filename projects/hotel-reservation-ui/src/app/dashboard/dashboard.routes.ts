import {Route} from '@angular/router';

export default {
  path: 'dashboard',
  loadComponent: () => import('./dashboard').then(m => m.Dashboard),
  children: [
    {
      path: 'staff',
      loadChildren: () => import('staff/routes'),
    },
    {
      path: 'organization',
      loadChildren: () => import('organization/routes'),
    },
    // {
    //   path: 'hotel',
    //   loadChildren: () => import('hotel-microfrontend/routes'),
    // },
  ]
} satisfies Route;
