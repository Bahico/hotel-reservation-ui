import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getEndpointFor } from '@components/config';
import { TokenModel } from './token.model';
import { TokenService } from './token.service';
import { AccountService } from './account.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private readonly accountService = inject(AccountService);
  private readonly tokenService = inject(TokenService);
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  private readonly resourceUrl = getEndpointFor('api/authenticate', 'userms');

  login(username: string, password: string) {
    this.http
      .post<TokenModel>(this.resourceUrl, { username, password })
      .subscribe(data => {
        this.tokenService.tokenData = data;
        this.router.navigate(['/']);
      });
  }

  logout() {
    this.tokenService.tokenData = null;
    this.accountService.logout();
  }
}
