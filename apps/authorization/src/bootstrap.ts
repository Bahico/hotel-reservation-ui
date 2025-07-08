import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import Login from './app/remote-entry/login/login';
import { enableProdMode } from '@angular/core';

enableProdMode();

bootstrapApplication(Login, appConfig).catch((err) =>
  console.error(err)
);
