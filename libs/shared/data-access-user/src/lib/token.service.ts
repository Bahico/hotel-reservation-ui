import { Injectable } from '@angular/core';
import { TokenModel } from './token.model';

@Injectable({ providedIn: 'root' })
export class TokenService {
  private token$: string;
  private refreshToken$: string;

  get token() {
    if (!this.token$) {
      this.token$ = localStorage.getItem('idToken');
    }
    return this.token$;
  }

  get refreshToken() {
    if (!this.refreshToken$) {
      this.refreshToken$ = localStorage.getItem('refreshToken');
    }
    return this.refreshToken$;
  }

  set tokenData(token: TokenModel) {
    if (!token) {
      localStorage.removeItem('idToken');
      localStorage.removeItem('refreshToken');
    } else {
      localStorage.setItem('idToken', token.idToken);
      localStorage.setItem('refreshToken', token.refreshToken);
      this.token$ = token.idToken;
      this.refreshToken$ = token.refreshToken;
    }
  }
}
