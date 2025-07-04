import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AddressCheckerComponent } from './app/address-checker.component';
import { appConfig } from './app/app.config';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AddressCheckerComponent, appConfig).catch((err) => console.error(err));
