import { NgModule } from '@angular/core';
import { ReturnDevicesOverviewComponent } from '@return-devices/feat-overview';

@NgModule({})
export class ReturnDevicesModule {
  static components = {
    'tg-return-devices-overview': ReturnDevicesOverviewComponent,
  };
}
