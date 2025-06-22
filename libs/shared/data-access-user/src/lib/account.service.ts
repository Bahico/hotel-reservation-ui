import { inject, Injectable } from '@angular/core';
import { AccountModel } from './account.model';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getEndpointFor } from '@components/config';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private readonly http = inject(HttpClient);

  private readonly resourceUrl = getEndpointFor('api/account', 'userms');
  private account$ = new BehaviorSubject<AccountModel>(null);

  get account() {
    if (this.account$.value) {
      return this.account$.asObservable();
    }

    return this.http.get<AccountModel>(this.resourceUrl)
      .pipe(
        tap(data => this.account$.next(data))
      );
  }

  logout() {
    this.account$.next(null);
  }
}
