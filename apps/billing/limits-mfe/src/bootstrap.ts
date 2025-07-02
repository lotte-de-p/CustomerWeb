import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './local/app.component';
import { appConfig } from './local/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
