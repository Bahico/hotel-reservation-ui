import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'staff',
    loadChildren: () => import('staff/Routes').then((m) => m),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
