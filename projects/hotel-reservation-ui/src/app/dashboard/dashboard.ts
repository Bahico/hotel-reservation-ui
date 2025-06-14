import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DashboardNavbarComponent, DashboardSidebarComponent} from '@components/layout';
import staffDashboardItems from 'staff/dashboard.items';
import organizationDashboardItems from 'organization/dashboard.items';
import {DashboardItem} from '@components/models';
import {RootSharedModule} from '@components/root-shared.module';
import {NzTableComponent, NzTableModule} from 'ng-zorro-antd/table';
import {NzDividerComponent} from 'ng-zorro-antd/divider';

@Component({
  imports: [
    RouterOutlet,
    DashboardSidebarComponent,
    DashboardNavbarComponent,
    RootSharedModule,
    NzTableModule,
    NzDividerComponent
  ],
  templateUrl: 'dashboard.html',
  styleUrl: 'dashboard.scss'
})
export class Dashboard {
  sidebarCollapsed = signal(false);

  dashboardItems = signal<DashboardItem[]>([
    ...staffDashboardItems,
    ...organizationDashboardItems
  ])
}
