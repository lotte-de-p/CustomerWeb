import { bootstrapApplication } from '@angular/platform-browser';
import { OrderConfiguratorLocalComponent } from './local/order-configurator-local.component';
import { appConfig } from './local/order-configuration-local.module';

bootstrapApplication(OrderConfiguratorLocalComponent, appConfig).catch((err) => console.error(err));
