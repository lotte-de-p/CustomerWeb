import { enableProdMode } from '@angular/core';
import { defineCustomElements } from '@telenet/wink-core/loader/index';

import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';

enableProdMode();

defineCustomElements(window);
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
