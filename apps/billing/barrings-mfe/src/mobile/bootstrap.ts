import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';

enableProdMode();

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
