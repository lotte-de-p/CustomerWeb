import { enableProdMode } from '@angular/core';

import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';

enableProdMode();

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
