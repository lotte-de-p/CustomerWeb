import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { contactInfoFeature } from './contact-info.reducer';

@NgModule({
  imports: [StoreModule.forFeature(contactInfoFeature)],
})
export class ContactInfoNgrxModule {}
