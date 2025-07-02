import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { stepfeature } from './step.reducer';

@NgModule({
  imports: [StoreModule.forFeature(stepfeature)],
})
export class StepsNgrxModule {}
