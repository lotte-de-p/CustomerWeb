import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { MessagesModule } from '@telenet/ng-lib-message';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { LoaderModule } from '@telenet/ng-lib-page';
import { FleetUserLineAddOptionsComponent } from './product/line-add-options/fleet-user-line-add-options.component';
import { FleetUserLineRemoveOptionsComponent } from './product/line-remove-options/fleet-user-line-remove-options.component';
import { FleetUserLineChangeTariffPlanComponent } from './product/line-change-tariff-plan/fleet-user-line-change-tariff-plan.component';
import { FleetUserProductOverviewComponent } from './product/product-overview/fleet-user-product-overview.component';
import { FleetUserMobileUsageOverviewComponent } from './product/usage/mobile-usage-overview/fleet-user-mobile-usage-overview.component';
import { FleetUserAccountSelectorComponent } from './profile/fleet-user-account-selector/fleet-user-account-selector.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    TranslateModule,
    LoginModule,
    MessagesModule,
    ReactiveFormsModule,
    LoaderModule,
  ],
  providers: [],
  exports: [],
})
export class FleetUserModule {
  static components = {
    'tg-fleet-user-line-add-options': FleetUserLineAddOptionsComponent,
    'tg-fleet-user-line-remove-options': FleetUserLineRemoveOptionsComponent,
    'tg-fleet-user-line-change-tariff-plan': FleetUserLineChangeTariffPlanComponent,
    'tg-fleet-user-product-overview': FleetUserProductOverviewComponent,
    'tg-fleet-user-mobile-usage-overview': FleetUserMobileUsageOverviewComponent,
    'tg-fleet-user-account-selector': FleetUserAccountSelectorComponent,
  };
}
// Compare this snippet from apps/fleet/fleet-mfe/src/app/fleet-user/fleet-user.module.ts:
