import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { environment } from './environments/environment';
import { appConfig } from './local/app.config';
import { AppComponent } from './local/app.component';
import { defineCustomElements } from '@telenet/wink-core/loader/index';

defineCustomElements(window);

if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
