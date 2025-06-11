import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DashboardNavbarComponent, DashboardSidebarComponent} from '@components/layout';
import staffDashboardItems from 'staff/dashboard.items';
import {DashboardItem} from '@components/models';

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

  dashboardItems = signal<DashboardItem[]>([
    ...staffDashboardItems
  ])
}
