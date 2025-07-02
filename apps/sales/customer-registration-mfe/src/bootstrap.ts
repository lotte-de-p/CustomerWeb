import { bootstrapApplication } from '@angular/platform-browser';
import { CustomerRegistrationLocalComponent } from './local/customer-registration-local.component';
import { appConfig } from './local/customer-registration-local.config';

bootstrapApplication(CustomerRegistrationLocalComponent, appConfig).catch((err) => console.error(err));
