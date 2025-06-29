import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Profile } from './app/remote-entry/profile/profile';

bootstrapApplication(Profile, appConfig).catch((err) =>
  console.error(err)
);
