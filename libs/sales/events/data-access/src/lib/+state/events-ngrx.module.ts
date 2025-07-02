import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { eventFeature } from './event.reducer';

@NgModule({
  imports: [StoreModule.forFeature(eventFeature)],
})
export class EventsNgrxModule {}
