import { bootstrapApplication } from '@angular/platform-browser';
import { defineCustomElements } from '@telenet/wink-core/loader/index';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

defineCustomElements(window);
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
