import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DashboardSidebar} from './components/sidebar/dashboard-sidebar';
import {DashboardNavbar} from './components/navbar/dashboard-navbar';

@Component({
  imports: [
    RouterOutlet,
    DashboardSidebar,
    DashboardNavbar
  ],
  templateUrl: 'dashboard.html',
  styleUrl: 'dashboard.scss'
})
export class Dashboard {

}
