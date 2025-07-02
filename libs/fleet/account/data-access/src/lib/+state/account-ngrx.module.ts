import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { accountFeature } from './account.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from './account.effects';

@NgModule({
  imports: [StoreModule.forFeature(accountFeature), EffectsModule.forFeature([AccountEffects])],
})
export class AccountNgrxModule {}
