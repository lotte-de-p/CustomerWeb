import { NgModule } from '@angular/core';
import { FleetSimCardModule } from './fleet-sim-card/fleet-sim-card.module';
import { FleetAccountModule } from './fleet-account/fleet-account.module';
import { FleetProfileModule } from './fleet-profile/fleet-profile.module';
import { StoreModule } from '@ngrx/store';
import { AccountNgrxModule } from '@fleet/account/data-access';
import { EffectsModule } from '@ngrx/effects';
import { FleetProductModule } from './fleet-product/fleet-product.module';
import { FleetUserModule } from './fleet-user/fleet-user.module';

@NgModule({
  imports: [
    FleetSimCardModule,
    FleetAccountModule,
    FleetProfileModule,
    FleetProductModule,
    FleetUserModule,
    StoreModule.forRoot({}),
    AccountNgrxModule,
    EffectsModule.forRoot({}),
  ],
})
export class FleetModule {}
