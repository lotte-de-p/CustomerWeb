import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './local/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { APP_CONFIG } from './local/app.config';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, APP_CONFIG).catch((err) => console.error(err));
