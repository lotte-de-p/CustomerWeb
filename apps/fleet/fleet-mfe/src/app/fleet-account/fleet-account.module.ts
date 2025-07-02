import { NgModule } from '@angular/core';
import { BundleUsageRemindersComponent } from './bundle-usage-reminders/bundle-usage-reminders.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';

@NgModule({})
export class FleetAccountModule {
  static components = {
    'tg-bundle-usage-reminders': BundleUsageRemindersComponent,
    'tg-manage-profile': ManageProfileComponent,
  };
}
