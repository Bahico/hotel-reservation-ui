import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserAuth } from 'data-access-user';
import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'ng-mf-login-entry',
  templateUrl: 'login.html',
  styleUrl: 'login.scss',
})
export class Login {
  private userService = inject(UserAuth);
  username = '';
  password = '';
  isLoggedIn = toSignal(this.userService.isUserLoggedIn$);

  login() {
    this.userService.checkCredentials(this.username, this.password);
  }
}
