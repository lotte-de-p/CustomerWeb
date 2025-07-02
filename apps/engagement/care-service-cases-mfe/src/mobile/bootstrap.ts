import { enableProdMode } from '@angular/core';
import { environment } from '../environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { APP_CONFIG } from './app.config';
import { AppComponent } from '../local/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, APP_CONFIG).catch((err) => console.error(err));
