import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  imports: [RouterModule],
  selector: 'dashboard-root',
  templateUrl: 'app.html',
  styleUrl: 'app.scss',
})
export class App {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
