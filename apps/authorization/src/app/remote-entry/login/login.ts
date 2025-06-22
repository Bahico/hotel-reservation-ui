import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from 'data-access-user';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'ng-mf-login-entry',
  templateUrl: 'login.html',
  styleUrl: 'login.scss',
})
export class Login {
  private userService = inject(LoginService);
  username = '';
  password = '';

  login() {
    this.userService.login(this.username, this.password);
  }
}
