import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { summaryFeature } from './summary.reducer';

@NgModule({
  imports: [StoreModule.forFeature(summaryFeature)],
})
export class SummaryNgrxModule {}
