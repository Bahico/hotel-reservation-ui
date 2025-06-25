import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '@components/account';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'login',
  templateUrl: 'login.html',
  styleUrl: 'login.scss',
})
export default class Login implements OnInit {
  private userService = inject(LoginService);
  username = '';
  password = '';

  ngOnInit() {
    this.userService.logout()
  }

  login() {
    this.userService.login(this.username, this.password);
  }
}
