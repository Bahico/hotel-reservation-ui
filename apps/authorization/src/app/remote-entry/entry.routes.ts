import { Route } from '@angular/router';
import { Register } from './register';

export default [
  { path: 'login', loadComponent: () => import('./login/login') },
  { path: 'register', component: Register }
] satisfies Route[];
