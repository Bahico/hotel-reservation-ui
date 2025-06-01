import {Route} from '@angular/router';

export default {
  path: 'dashboard',
  loadComponent: () => import('./dashboard').then(m => m.Dashboard),
} satisfies Route;
