import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './local/app.component';
import { appConfig } from './local/app.config';
import { defineCustomElements } from '@telenet/wink-core/loader/index';

defineCustomElements(window);
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
