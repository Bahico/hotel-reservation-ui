import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Profile } from './app/remote-entry/profile/profile';
import { enableProdMode } from '@angular/core';

enableProdMode();

bootstrapApplication(Profile, appConfig).catch((err) =>
  console.error(err)
);
