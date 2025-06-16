import {Route} from '@angular/router';
import {Login} from './login';
import {Register} from './register';

export const remoteRoutes: Route[] = [
  { path: 'login', component: Login },
  { path: 'register', component: Register }
];
