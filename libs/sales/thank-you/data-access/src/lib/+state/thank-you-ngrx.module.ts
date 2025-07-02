import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { thankYouFeature } from './thank-you.reducer';

@NgModule({
  imports: [StoreModule.forFeature(thankYouFeature)],
})
export class ThankYouNgrxModule {}
