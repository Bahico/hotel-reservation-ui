import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {App} from './app/app';

bootstrapApplication(App, appConfig)
  .then(() => {
    const loadingEl = document.getElementById('loading-indicator');
    if (loadingEl) {
      setTimeout(() => {
        loadingEl.remove();
      })
    }
  })
  .catch((err) =>
    console.error(err)
  );
