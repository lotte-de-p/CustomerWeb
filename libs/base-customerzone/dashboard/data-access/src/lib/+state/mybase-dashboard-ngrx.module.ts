import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MyBaseDashboardEffects } from './mybase-dashboard.effects';
import { myBaseDashboardFeature } from './mybase-dashboard.reducer';

@NgModule({
  imports: [EffectsModule.forFeature([MyBaseDashboardEffects]), StoreModule.forFeature(myBaseDashboardFeature)],
})
export class MyBaseDashoardNgrxModule {}
