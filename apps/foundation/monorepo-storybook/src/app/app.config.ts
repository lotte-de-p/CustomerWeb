import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig = {
  providers: [importProvidersFrom(BrowserModule), provideRouter(appRoutes, withEnabledBlockingInitialNavigation())],
};
