import {Component, input, output, signal} from '@angular/core';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: 'dashboard-sidebar.html',
  styleUrl: 'dashboard-sidebar.scss'
})
export class DashboardSidebar {
  collapsed = input(false);
  collapsedChange = output<boolean>();


  toggleSidebar() {
    this.collapsedChange.emit(!this.collapsed());
  }
}
