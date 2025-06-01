import {Component, input, output} from '@angular/core';
import {IconComponent} from 'shared/icon/icon.component';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: 'dashboard-sidebar.html',
  imports: [
    IconComponent
  ],
  styleUrl: 'dashboard-sidebar.scss'
})
export class DashboardSidebar {
  collapsed = input(false);
  collapsedChange = output<boolean>();


  toggleSidebar() {
    this.collapsedChange.emit(!this.collapsed());
  }
}
