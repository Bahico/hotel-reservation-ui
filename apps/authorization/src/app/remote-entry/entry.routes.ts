import {Route} from '@angular/router';
import {Login} from './login';
import {Register} from './register';

export default [
  { path: 'login', component: Login },
  { path: 'register', component: Register }
] satisfies Route[];
