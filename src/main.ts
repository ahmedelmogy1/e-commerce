import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { isDevMode } from '@angular/core';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

if (isDevMode()) {
  console.warn = () => {}; // to stop warring in devloping but is not good forever
}

