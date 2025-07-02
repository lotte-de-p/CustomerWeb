import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ContactInfo } from '@sales/order-configurator/contact-info/domain';
import { contactInfo } from '@sales/order-configurator/contact-info/state';

@Component({
  standalone: true,
  imports: [AsyncPipe, TranslateModule],
  selector: 'tg-sales-order-configurator-contact-info-feat-contact-info-summary',
  templateUrl: './contact-info-summary.component.html',
})
export class ContactInfoSummaryComponent {
  contactInfo$: Observable<ContactInfo>;

  constructor(private readonly store: Store) {
    this.contactInfo$ = this.store.select(contactInfo);
  }
}
