import {Component} from '@angular/core';

@Component({
  selector: 'dashboard-navbar',
  templateUrl: 'dashboard-navbar.component.html',
  styleUrl: 'dashboard-navbar.component.scss',
  host: {
    '[style.width.%]': '100',
  }
})
export class DashboardNavbarComponent {

}
