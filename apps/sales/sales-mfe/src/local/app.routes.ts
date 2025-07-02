import { importProvidersFrom } from '@angular/core';
import { Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { deliveryFeature } from '@sales/delivery/data-access';
import { etfFeature } from '@sales/etf/data-access';
import { eventFeature } from '@sales/events/data-access';
import { hardwareCheckoutFeature } from '@sales/hardware-checkout/data-access';
import { stepfeature } from '@sales/shared/data-access';
import { summaryFeature } from '@sales/summary/data-access';
import { thankYouFeature } from '@sales/thank-you/data-access';
import { ThankYouStepComponent } from '@sales/thank-you/feat-thank-you';
import { HardwareCheckoutLocalComponent, SalesModeEnum } from './hardware-checkout-local.component';
import { addressFormFieldFeature } from '@sales/address-form-field/data-access';

export const appRoutes: Route[] = [
  {
    path: 'hardware-checkout',
    component: HardwareCheckoutLocalComponent,
    providers: [
      importProvidersFrom(StoreModule.forFeature(hardwareCheckoutFeature)),
      importProvidersFrom(StoreModule.forFeature(addressFormFieldFeature)),
      importProvidersFrom(StoreModule.forFeature(eventFeature)),
      importProvidersFrom(StoreModule.forFeature(stepfeature)),
      importProvidersFrom(StoreModule.forFeature(deliveryFeature)),
      importProvidersFrom(StoreModule.forFeature(summaryFeature)),
      importProvidersFrom(StoreModule.forFeature(etfFeature)),
      importProvidersFrom(StoreModule.forFeature(thankYouFeature)),
    ],
    data: { mode: SalesModeEnum.Hardware },
  },
  {
    path: 'product-finder',
    loadComponent: () => import('../app/product-finder/product-finder.component').then((m) => m.ProductFinderComponent),
  },
  {
    path: 'one-configurator',
    pathMatch: 'full',
    loadComponent: () =>
      import('../app/one-configurator/one-configurator.component').then((m) => m.OneConfiguratorComponent),
  },
  {
    path: 'thank-you',
    component: ThankYouStepComponent,
  },
];
