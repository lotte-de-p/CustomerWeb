import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { easySwitchFeature } from './easy-switch.reducer';

@NgModule({
  imports: [StoreModule.forFeature(easySwitchFeature)],
})
export class EasySwitchNgrxModule {}
