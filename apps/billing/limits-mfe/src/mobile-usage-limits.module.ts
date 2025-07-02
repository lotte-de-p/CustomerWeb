import { NgModule } from '@angular/core';
import { MobileUsageLimitsComponent } from '@billing/mobile-usage-limits/feat-mobile-usage-limits';

@NgModule({})
export class MobileUsageLimitsModule {
  static components = {
    'tg-mobile-usage-limits': MobileUsageLimitsComponent,
  };
}
