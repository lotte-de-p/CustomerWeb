import { AppComponent } from './local/app.component';

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './local/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
