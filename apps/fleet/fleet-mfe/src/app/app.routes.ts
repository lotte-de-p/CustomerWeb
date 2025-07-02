import { Routes } from '@angular/router';
import { BundleUsageRemindersComponent } from './fleet-account/bundle-usage-reminders/bundle-usage-reminders.component';
import { OrderHistoryComponent } from './fleet-sim-card/order-history/order-history.component';
import { SimActivationManagerComponent } from './fleet-sim-card/sim-activation/sim-activation-manager/sim-activation-manager.component';
import { SimActivationUserComponent } from './fleet-sim-card/sim-activation/sim-activation-user/sim-activation-user.component';
import { LineApnDetailsComponent } from './fleet-sim-card/line-apn-details/line-apn-details.component';
import { LineMoreDetailsComponent } from './fleet-sim-card/line-more-details/line-more-details.component';
import { LocalLineNavigationListComponent } from './fleet-sim-card/line-navigation-list/local/local-line-navigation-list.component';
import { LineNumberComponent } from './fleet-sim-card/line-number/line-number.component';
import { LineIdentificationDetailsComponent } from './fleet-profile/line-identification-details/line-identification-details.component';
import { LineAddressDetailsComponent } from './fleet-profile/line-address-details/line-address-details.component';
import { SimNumberComponent } from './fleet-contact/create-line/steps/sim-number/sim-number.component';
import { MsaContainerComponent } from './fleet-profile/msa/msa.container';
import { ManageProfileComponent } from './fleet-account/manage-profile/manage-profile.component';
import { MobileNumberComponent } from './fleet-account/manage-profile/mobile-number/mobile-number.component';
import { FleetUserProductOverviewComponent } from './fleet-user/product/product-overview/fleet-user-product-overview.component';
import { HomeComponent } from './local/components/home/home.component';
import { FleetUserMobileUsageOverviewComponent } from './fleet-user/product/usage/mobile-usage-overview/fleet-user-mobile-usage-overview.component';
import { FleetUserAccountSelectorComponent } from './fleet-user/profile/fleet-user-account-selector/fleet-user-account-selector.component';
import { FleetUserLineAddOptionsComponent } from './fleet-user/product/line-add-options/fleet-user-line-add-options.component';
import { FleetUserLineRemoveOptionsComponent } from './fleet-user/product/line-remove-options/fleet-user-line-remove-options.component';
import { FleetUserLineChangeTariffPlanComponent } from './fleet-user/product/line-change-tariff-plan/fleet-user-line-change-tariff-plan.component';
import { FleetUserMobileUsageOverviewDemoOneComponent } from './local/components/demo/fleet-user/product/usage/mobile-usage-overview/fleet-user-mobile-usage-overview-demo-one';
import { FleetUserMobileUsageOverviewDemoSplitBillBudgetComponent } from './local/components/demo/fleet-user/product/usage/mobile-usage-overview/fleet-user-mobile-usage-overview-demo-split-bill-budget';
import { ProductOverviewComponent } from './fleet-product/product-overview/product-overview.component';
import { FleetManagerLineRemoveOptionsComponent } from './fleet-product/line/line-remove-options/fleet-manager-line-remove-options.component';
import { FleetManagerLineProductDetailsComponent } from './fleet-product/line/line-product-details/fleet-manager-line-product-details.component';
import { FleetManagerLineProductDetailsDemoComponent } from './local/components/demo/fleet-product/line-product-details/fleet-manager-line-product-details';
import { FleetManagerLineChangeTariffPlanComponent } from './fleet-product/line/line-change-tariff-plan/fleet-manager-line-change-tariff-plan.component';
import { FleetManagerLineAddOptionsComponent } from './fleet-product/line/line-add-options/fleet-manager-line-add-options.component';

export const routes = [
  { path: 'bundle-usage-reminders', component: BundleUsageRemindersComponent },
  { path: 'sim-card-order-history', component: OrderHistoryComponent },
  { path: 'sim-activation-manager', component: SimActivationManagerComponent },
  { path: 'sim-activation-user', component: SimActivationUserComponent },
  { path: 'line-apn-details', component: LineApnDetailsComponent },
  { path: 'line-more-details', component: LineMoreDetailsComponent },
  { path: 'line-navigation-list', component: LocalLineNavigationListComponent },
  { path: 'line-number', component: LineNumberComponent },
  { path: 'line-identification-details', component: LineIdentificationDetailsComponent },
  { path: 'line-address-details', component: LineAddressDetailsComponent },
  { path: 'fleet-user-line-add-options', component: FleetUserLineAddOptionsComponent },
  { path: 'fleet-user-line-remove-options', component: FleetUserLineRemoveOptionsComponent },
  { path: 'fleet-user-line-change-tariff-plan', component: FleetUserLineChangeTariffPlanComponent },
  { path: 'create-line', component: SimNumberComponent },
  { path: 'msa', component: MsaContainerComponent },
  { path: 'manage-profile', component: ManageProfileComponent },
  { path: 'mobile-number', component: MobileNumberComponent },
  { path: 'product-overview', component: ProductOverviewComponent },
  { path: 'fleet-user-product-overview', component: FleetUserProductOverviewComponent },
  { path: 'fleet-user-mobile-usage-overview', component: FleetUserMobileUsageOverviewComponent },
  { path: 'fleet-user-mobile-usage-overview-demo-one', component: FleetUserMobileUsageOverviewDemoOneComponent },
  {
    path: 'fleet-user-mobile-usage-overview-demo-splitbill-budget',
    component: FleetUserMobileUsageOverviewDemoSplitBillBudgetComponent,
  },
  { path: 'fleet-user-account-selector', component: FleetUserAccountSelectorComponent },
  { path: 'line-product-details', component: FleetManagerLineProductDetailsComponent },
  { path: 'fleet-manager-line-remove-options', component: FleetManagerLineRemoveOptionsComponent },
  { path: 'fleet-manager-line-change-tariff-plan', component: FleetManagerLineChangeTariffPlanComponent },
  { path: 'fleet-manager-line-add-options', component: FleetManagerLineAddOptionsComponent },
  { path: 'fleet-manager-line-product-details-demo', component: FleetManagerLineProductDetailsDemoComponent },

  { path: '**', component: HomeComponent },
] satisfies Routes;
