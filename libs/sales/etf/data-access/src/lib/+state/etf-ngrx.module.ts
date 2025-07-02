import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { etfFeature } from './etf.reducer';

@NgModule({
  imports: [StoreModule.forFeature(etfFeature)],
})
export class EtfNgrxModule {}
