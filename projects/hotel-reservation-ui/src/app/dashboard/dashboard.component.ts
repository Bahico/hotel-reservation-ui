import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DashboardSidebarComponent} from './components/sidebar/dashboard-sidebar.component';
import {DashboardNavbarComponent} from './components/navbar/dashboard-navbar.component';

@Component({
  imports: [
    RouterOutlet,
    DashboardSidebarComponent,
    DashboardNavbarComponent
  ],
  templateUrl: 'dashboard.component.html',
  styleUrl: 'dashboard.component.scss'
})
export class DashboardComponent {
  sidebarCollapsed = signal(false);
}
