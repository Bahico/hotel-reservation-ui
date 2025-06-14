import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DashboardNavbarComponent, DashboardSidebarComponent} from '@components/layout';
import staffDashboardItems from 'staff/dashboard.items';
import organizationDashboardItems from 'organization/dashboard.items';
import {DashboardItem} from '@components/models';
import {RootSharedModule} from '@components/root-shared.module';
import {NzTableComponent, NzTableModule} from 'ng-zorro-antd/table';
import {NzDividerComponent} from 'ng-zorro-antd/divider';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  imports: [
    RouterOutlet,
    DashboardSidebarComponent,
    DashboardNavbarComponent,
    RootSharedModule,
    NzTableModule,
    NzDividerComponent
  ],
  templateUrl: 'dashboard.component.html',
  styleUrl: 'dashboard.component.scss'
})
export class DashboardComponent {
  sidebarCollapsed = signal(false);

  dashboardItems = signal<DashboardItem[]>([
    ...staffDashboardItems,
    ...organizationDashboardItems
  ])

  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
}
