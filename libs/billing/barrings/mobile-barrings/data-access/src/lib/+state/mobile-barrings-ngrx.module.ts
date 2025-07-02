import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MobileBarringsEffects } from './mobile-barrings.effects';
import { mobileBarringsFeature } from './mobile-barrings.reducers';

@NgModule({
  imports: [EffectsModule.forFeature([MobileBarringsEffects]), StoreModule.forFeature(mobileBarringsFeature)],
})
export class MyBaseDashoardNgrxModule {}
