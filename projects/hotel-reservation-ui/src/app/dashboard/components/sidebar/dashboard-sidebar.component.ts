import {Component, input, output, signal} from '@angular/core';
import {IconComponent} from '@components/components';
import {DashboardItem} from '@components/models';
import staffDashboardItems from 'staff/dashboard.items';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: 'dashboard-sidebar.component.html',
  imports: [
    IconComponent
  ],
  styleUrl: 'dashboard-sidebar.component.scss'
})
export class DashboardSidebarComponent {
  collapsed = input(false);
  collapsedChange = output<boolean>();

  dashboardItems = signal<DashboardItem[]>([
    ...staffDashboardItems
  ]);


  toggleSidebar() {
    this.collapsedChange.emit(!this.collapsed());
  }
}
