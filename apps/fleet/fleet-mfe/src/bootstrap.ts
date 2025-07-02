import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { applicationConfig } from './app/app.config';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, applicationConfig).catch((err) => console.error(err));
