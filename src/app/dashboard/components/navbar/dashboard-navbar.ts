import {Component} from '@angular/core';

@Component({
  selector: 'dashboard-navbar',
  templateUrl: 'dashboard-navbar.html',
  styleUrl: 'dashboard-navbar.scss',
  host: {
    '[style.width.%]': '100',
  }
})
export class DashboardNavbar {

}
