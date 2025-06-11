import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {Button} from 'primeng/button';

@Component({
  imports: [RouterModule, Button],
  selector: 'dashboard-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
