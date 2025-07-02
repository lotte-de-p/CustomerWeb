import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { MessagesModule } from '@telenet/ng-lib-message';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { LoaderModule } from '@telenet/ng-lib-page';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { FleetManagerLineProductDetailsComponent } from './line/line-product-details/fleet-manager-line-product-details.component';
import { FleetManagerLineRemoveOptionsComponent } from './line/line-remove-options/fleet-manager-line-remove-options.component';
import { FleetManagerLineChangeTariffPlanComponent } from './line/line-change-tariff-plan/fleet-manager-line-change-tariff-plan.component';
import { FleetManagerLineAddOptionsComponent } from './line/line-add-options/fleet-manager-line-add-options.component';

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
export class FleetProductModule {
  static components = {
    'tg-product-overview': ProductOverviewComponent,
    'tg-fleet-manager-line-product-details': FleetManagerLineProductDetailsComponent,
    'tg-fleet-manager-line-remove-options': FleetManagerLineRemoveOptionsComponent,
    'tg-fleet-manager-line-add-options': FleetManagerLineAddOptionsComponent,
    'tg-fleet-manager-line-change-tariff-plan': FleetManagerLineChangeTariffPlanComponent,
  };
}
